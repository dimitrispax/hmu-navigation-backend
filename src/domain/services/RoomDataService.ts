import axios from 'axios';
import { filterNotReservableRooms } from '../utillities/utillities';
import { getAllPois } from '../../presenter/controllers/poiControllers';


/***************************************/
/**** Accessing data from MRBS API ****/
/*************************************/

/* Constructing a new universal custom axios call */
const baseURL = `https://mrbs.hmu.gr/api`;
const MRBS = axios.create({ baseURL });


/* Gets info for each room from MRBS API. */
const getAllRoomsData = async () => {
    try {
        // const URI = `/map/rooms`;
        const URI = `/map-info/room/list/0/10000`;
        const encodedURI = encodeURI(URI);
        const response = await MRBS.get(encodedURI);
        const mappedResponse = response.data.map((res: any) => {
            const description = `${res.id}${res.description ? " - " + res.description : ""}`;

            return ({ id: res.id, description, sort_key: res.id })
        })
        return mappedResponse;
    }
    catch (err) {
        console.log("ERROR")
    }
    return null;
}

/* Gets info for each room that can be reserved from MRBS API. */
const getAllReservableRoomsData = async () => {
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



export const getRoomData: () => Promise<Object> = async () => {

    let dictionary: any = {};
    const pois = await getAllPois();

    let roomsData = await filterNotReservableRooms(getAllRoomsData, getAllReservableRoomsData);

    // these rooms have not doors so they must be access from path with nodes.
    roomsData.roomsReserveData.map(((el: any) => {
        if (el.sort_key.includes('Κ28')) {
            el.sort_key = '141'
        }
        if (el.sort_key.includes('Κ23')) {
            el.sort_key = '185'
        }
    }));

    const temp = roomsData.RoomsDataWithNotReservableField.concat(roomsData.roomsReserveData);

    dictionary['roomsInfo'] = temp.concat(pois);

    dictionary['areaIDArray'] = roomsData.AreaIDsArray;

    return dictionary;
}




