import { Request, Response, NextFunction } from 'express';
import { createLogger } from 'winston';

import { pointDAO } from '../../data/dao/pointDAO';
import pointDTO from '../../domain/dto/pointDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllPoints = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pointDAOcalls = new pointDAO();                                        // Calling DAO.
        const allPoints = await pointDAOcalls.getAll();                              // Get All Points from DAO.

        const DTOPoints = allPoints.map((point) => dtoMapper(point, new pointDTO()));    // Transforming objects with DTO.

        res.status(200).json(DTOPoints);

    } catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

