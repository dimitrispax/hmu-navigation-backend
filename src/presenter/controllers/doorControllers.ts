import { Request, Response, NextFunction } from 'express';

import { doorDAO } from '../../data/dao/doorDAO';
import DoorDTO from '../../domain/dto/doorDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllDoors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const doorsDAOCalls = new doorDAO();                                        // Calling DAO.
        const allDoors = await doorsDAOCalls.getAll();                              // Get All Doors from DAO.

        const DTODoors = allDoors.map((door) => dtoMapper(door, new DoorDTO()));    // Transforming objects with DTO.

        res.status(200).json({
            message: 'All doors',
            count: allDoors.length,
            rooms: allDoors
        })
    } catch (err) {
        console.log("ERROR")
        return next(err)
    }
}


