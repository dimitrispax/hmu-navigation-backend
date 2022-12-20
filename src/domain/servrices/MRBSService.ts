import axios from 'axios';

/***************************************/
/**** Accessing data from MRBS API ****/
/*************************************/

export const getMRBSFloorByID = async (floorID: string) => {
    try {
        const URI = `https://mrbs.hmu.gr/api/pg/map/floor/${floorID}`;
        const encodedURI = encodeURI(URI);
        const response = await axios.get(encodedURI);

        return response.data;
    }
    catch (err) {
        console.log("ERROR")
    }
    return null;
}

export const getMRBSDoorsByID = async (roomID: string) => {
    try {
        const URI = `https://mrbs.hmu.gr/api/pg/door/${roomID}`;
        const encodedURI = encodeURI(URI);
        const response = await axios.get(encodedURI);

        return response.data;
    }
    catch (err) {
        console.log("ERROR")
    }
    return null;
}

export const getMRBSBuildingByID = async (buildingID: string) => {
    try {
        const URI = `https://mrbs.hmu.gr/api/pg/map/border/${buildingID}`;
        const encodedURI = encodeURI(URI);
        const response = await axios.get(encodedURI);

        return response.data;
    }
    catch (err) {
        console.log("ERROR")
    }
    return null;
}