import { Request, Response, NextFunction } from 'express';

import { roomDAO } from '../../data/dao/roomDAO';
import roomDTO from '../../domain/dto/roomDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/* CHANGE ANY TYPES TO SPECIFIC TYPES */
export const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const allRooms = await roomsDAOCalls.getAll();                              // Get All Rooms from DAO.
        console.log("all rooms: ", allRooms);
        const DTORooms = allRooms.map((room) => dtoMapper(room, new roomDTO()));    // Transforming objects with DTO.

        res.status(200).json({
            message: 'All rooms',
            count: DTORooms.length,
            rooms: DTORooms
        })
    } catch (err) {
        console.log("error")
        return next(err)
    }
}

