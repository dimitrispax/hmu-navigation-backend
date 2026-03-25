import { Request, Response, NextFunction } from 'express';

import { doorDAO } from '../../data/dao/doorDAO';
import DoorDTO from '../../domain/dto/doorDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllDoors = async () => {
    try {
        const doorsDAOCalls = new doorDAO();                                        // Calling DAO.
        const allDoors = await doorsDAOCalls.getAll();                              // Get All Doors from DAO.

        const DTODoors = allDoors.map((door) => dtoMapper(door, new DoorDTO()));    // Transforming objects with DTO.

        return DTODoors;

    } catch (err) {
        return err
    }
}


