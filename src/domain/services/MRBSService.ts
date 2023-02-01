import axios from 'axios';
import { getAllBuildings } from '../../presenter/controllers/buildingControllers';
import { getAllDoors } from '../../presenter/controllers/doorControllers';
import { getAllPois } from '../../presenter/controllers/poiControllers';
import { getAllRooms } from '../../presenter/controllers/roomsControllers';

const cliProgress = require('cli-progress');

/***************************************/
/**** Accessing data from MRBS API ****/
/*************************************/

/* Constructing a new universal custom axios call */
const baseURL = `https://mrbs.hmu.gr/api`;
const MRBS = axios.create({ baseURL });

// In practice, there is not any calls to get ALL the floors of the building
// so, this function makes floorIDs and structure the first
// level of the dictionary.
const floorIDMaker = (base: string) => {

    let floorIDObj: any = {};

    // the MAX building floors is 3
    // the MIN building floors is -1
    for (let i = -1; i <= 3; i++) {

        if (i === -1) {
            let floorID = base + '.' + '00';  // the mrbs system portrays -1 floors as 00.
            floorIDObj['00'] = { floorID, rooms: {}, outline: {} };
            continue;
        }
        let floorID = base + '.' + i;
        floorIDObj[i] = { floorID, rooms: {}, outline: {} };
    }
    return floorIDObj;
}

/* Gets each outline of the floor that the user requests.  */
const getFloorOutline = async (floorID: string) => {
    try {
        const URI = `/pg/map/border/${floorID}`;
        const encodedURI = encodeURI(URI);
        const response = await MRBS.get(encodedURI);

        return response.data;
    }
    catch (err) {
        console.log("ERROR")
    }
    return null;
}

/* Gets info for each room from MRBS API. */
const getAllRoomsData = async () => {
    try {
        const URI = `/map/rooms`;
        const encodedURI = encodeURI(URI);
        const response = await MRBS.get(encodedURI);

        return response.data;
    }
    catch (err) {
        console.log("ERROR")
    }
    return null;
}




export const getMRBSData: () => Promise<Object> = async () => {

    // create a new progress bar instance and use shades_classic theme
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);


    // Gets all rooms, doors and buildings as well as pois(points that are not rooms) of the campus from postgres(QGIS).
    const buildings: any = await getAllBuildings();
    const floors: any = await getAllRooms();
    const doors: any = await getAllDoors();
    const pois: any = await getAllPois();

    // Gets all buildings of the campus from the MRBS API.
    let roomsData = await getAllRoomsData();


    let dictionary: any = {};
    let roomCount = 0;

    // start the progress bar with a total value of 1080(all rooms that are in MRBS) and start value of 0
    console.log("\n------====DOWNLOADING MRBS DATA====------");
    progressBar.start(1080, 0);


    /* Creating Floors */
    for (const building of buildings.features) {

        // create and store the floorID of each building
        dictionary[building.id] = floorIDMaker(building.id);

        // these rooms have not doors so they must be access from path with nodes.
        roomsData.map(((el: any) => {
            if (el.sort_key.includes('Κ28')) {
                el.sort_key = '141'
            }
            if (el.sort_key.includes('Κ23')) {
                el.sort_key = '185'
            }
        }));


        // setting all rooms and points of interest info(in order to be seachable)
        dictionary['roomsInfo'] = roomsData.concat(pois);

        /* Creating data of each floor */
        for (const floor of Object.keys(dictionary[building.id])) {

            // get the rooms of each floor of a building
            let roomsOfFloor = floors.features.filter((room: any) => {
                let roomID = room.id.split(".")
                if (floor === "-1") {
                    console.log("roomID[1]: ", roomID[1]);
                    console.log("floor: ", floor);
                }

                return (JSON.stringify(roomID[0]) === JSON.stringify(building.id) && JSON.stringify(roomID[1]) === JSON.stringify(floor))
            });


            // accessing only the buildings that have data.
            if (roomsOfFloor.length !== 0) {

                // get the outline of each floor of a building
                let outline = await getFloorOutline(dictionary[building.id][floor].floorID);

                // storing the outline of each floor
                // dictionary[building.id][floor].outline = outline;
                // storing the rooms of each floor
                dictionary[building.id][floor].rooms = roomsOfFloor;

                // deleting floorID as a property
                delete (dictionary[building.id][floor].floorID);

                /* Creating data of room */
                for (const room of dictionary[building.id][floor].rooms) {
                    // all the rooms --> floors[building.id][floor].rooms
                    // I want each room to be accessed by typing its number
                    // so, roomNumber in the number of each room.

                    // calculating the room number.
                    let roomNumber = room.id.split(".")[2];

                    // using the room number in order to be able to access the room in the dictionary.
                    // storing outline of room(geodata).
                    dictionary[building.id][floor][roomNumber] = { outline: room };
                    // storing the doors(geodata) of each room.
                    // dictionary[building.id][floor][roomNumber].doors = await getAllDoorsOfRoom(room.id);
                    dictionary[building.id][floor][roomNumber] = doors.filter((door: any) => {
                        let doorID = door.json_build_object.id.split(".")
                        return (JSON.stringify(doorID[0]) === JSON.stringify(building.id) && JSON.stringify(doorID[1]) === JSON.stringify(floor) && JSON.stringify(doorID[2]) === JSON.stringify(roomNumber))
                    });
                    /* !TEST ON THE GO! 
                      if (dictionary["Κ33"][0]["01"] !== undefined)
                        console.log("TEST:", dictionary["Κ33"][0]["01"].doors);
                    */

                    // count the number of rooms(922 calls)
                    roomCount += 1;
                    // updating progress bar with the value of roomCount
                    progressBar.update(roomCount);
                }
            }
            // if there is not any existing floor, delete it
            else {
                delete (dictionary[building.id][floor])
            }


        }
        if (Object.keys(dictionary[building.id]).length === 0) {
            delete dictionary[building.id]; // The object had no properties, so delete that property
        }
    }
    // stop the progress bar
    progressBar.stop();


    // return all data of MRBS to user.
    return dictionary;

}




/*

EXAMPLE: if the we do --> console.log(dictionary["Κ14"][0]["24"]);
         the system will return:
{
  doors: [ { json_build_object: [Object] }, { json_build_object: [Object] } ],
  outline: {
    type: 'Feature',
    id: 'Κ14.0.24',
    geometry: { type: 'MultiPolygon', coordinates: [Array] },
    properties: { feat_type: 'line', feat_area: 66.9589465107268 }
  }
}

*/
