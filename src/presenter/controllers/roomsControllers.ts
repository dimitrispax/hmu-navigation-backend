import { Request, Response, NextFunction } from 'express';

import { roomDAO } from '../../data/dao/roomDAO';
import roomDTO from '../../domain/dto/roomDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllRooms = async () => {
    try {
        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const allRooms = await roomsDAOCalls.getAll();                              // Get All Rooms from DAO.

        const DTORooms = allRooms.map((room) => dtoMapper(room, new roomDTO()));    // Transforming objects with DTO.

        return {
            type: "FeatureCollection",
            features: DTORooms
        }
    } catch (err) {
        console.log("ERROR")
        return err;
    }
}

