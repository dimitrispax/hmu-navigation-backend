"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMRBSData = void 0;
const axios_1 = __importDefault(require("axios"));
const buildingControllers_1 = require("../../presenter/controllers/buildingControllers");
const doorControllers_1 = require("../../presenter/controllers/doorControllers");
const roomsControllers_1 = require("../../presenter/controllers/roomsControllers");
const cliProgress = require('cli-progress');
/***************************************/
/**** Accessing data from MRBS API ****/
/*************************************/
/* Constructing a new universal custom axios call */
const baseURL = `https://mrbs.hmu.gr/api`;
const MRBS = axios_1.default.create({ baseURL });
// In practice, there is not any calls to get ALL the floors of the building
// so, this function makes floorIDs and structure the first
// level of the dictionary.
const floorIDMaker = (base) => {
    let floorIDObj = {};
    // the MAX building floors is 3
    // the MIN building floors is -1
    for (let i = -1; i <= 3; i++) {
        if (i === -1) {
            let floorID = base + '.' + '00'; // the mrbs system portrays -1 floors as 00.
            floorIDObj['00'] = { floorID, rooms: {}, outline: {} };
            continue;
        }
        let floorID = base + '.' + i;
        floorIDObj[i] = { floorID, rooms: {}, outline: {} };
    }
    return floorIDObj;
};
/* Gets each outline of the floor that the user requests.  */
const getFloorOutline = (floorID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URI = `/pg/map/border/${floorID}`;
        const encodedURI = encodeURI(URI);
        const response = yield MRBS.get(encodedURI);
        return response.data;
    }
    catch (err) {
        console.log("ERROR");
    }
    return null;
});
/* Gets info for each room from MRBS API. */
const getAllRoomsData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URI = `/map/rooms`;
        const encodedURI = encodeURI(URI);
        const response = yield MRBS.get(encodedURI);
        return response.data;
    }
    catch (err) {
        console.log("ERROR");
    }
    return null;
});
const getMRBSData = () => __awaiter(void 0, void 0, void 0, function* () {
    // create a new progress bar instance and use shades_classic theme
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    // Gets all rooms, doors and buildings of the campus from postgres(QGIS).
    const buildings = yield (0, buildingControllers_1.getAllBuildings)();
    const floors = yield (0, roomsControllers_1.getAllRooms)();
    const doors = yield (0, doorControllers_1.getAllDoors)();
    // Gets all buildings of the campus from the MRBS API.
    const roomsData = yield getAllRoomsData();
    let dictionary = {};
    let roomCount = 0;
    // start the progress bar with a total value of 1080(all rooms that are in MRBS) and start value of 0
    console.log("\n------====DOWNLOADING MRBS DATA====------");
    progressBar.start(1080, 0);
    /* Creating Floors */
    for (const building of buildings.features) {
        // create and store the floorID of each building
        dictionary[building.id] = floorIDMaker(building.id);
        /* Creating data of each floor */
        for (const floor of Object.keys(dictionary[building.id])) {
            //get the rooms of each floor of a building
            let roomsOfFloor = floors.features.filter((room) => {
                let roomID = room.id.split(".");
                if (floor === "-1") {
                    console.log("roomID[1]: ", roomID[1]);
                    console.log("floor: ", floor);
                }
                return (JSON.stringify(roomID[0]) === JSON.stringify(building.id) && JSON.stringify(roomID[1]) === JSON.stringify(floor));
            });
            // accessing only the buildings that have data.
            if (roomsOfFloor.length !== 0) {
                //get the outline of each floor of a building
                let outline = yield getFloorOutline(dictionary[building.id][floor].floorID);
                //storing the outline of each floor
                // dictionary[building.id][floor].outline = outline;
                //storing the rooms of each floor
                dictionary[building.id][floor].rooms = roomsOfFloor;
                //deleting floorID as a property
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
                    dictionary[building.id][floor][roomNumber] = { doors: {}, info: {}, outline: room };
                    // storing the doors(geodata) of each room.
                    // dictionary[building.id][floor][roomNumber].doors = await getAllDoorsOfRoom(room.id);
                    dictionary[building.id][floor][roomNumber].doors = doors.filter((door) => {
                        let doorID = door.json_build_object.id.split(".");
                        return (JSON.stringify(doorID[0]) === JSON.stringify(building.id) && JSON.stringify(doorID[1]) === JSON.stringify(floor) && JSON.stringify(doorID[2]) === JSON.stringify(roomNumber));
                    });
                    dictionary[building.id][floor][roomNumber].info = roomsData.find((roomData) => {
                        let roomDataID = roomData.sort_key.split(".");
                        return (JSON.stringify(roomDataID[0]) === JSON.stringify(building.id) && JSON.stringify(roomDataID[1]) === JSON.stringify(floor) && JSON.stringify(roomDataID[2]) === JSON.stringify(roomNumber));
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
                delete (dictionary[building.id][floor]);
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
});
exports.getMRBSData = getMRBSData;
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
//# sourceMappingURL=MRBSService.js.map