import { Request, Response, NextFunction } from 'express';
import { createLogger } from 'winston';

import { connectionDAO } from '../../data/dao/connectionDAO';
import connectionDTO from '../../domain/dto/connectionDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllConnections = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const connectionDAOcalls = new connectionDAO();                                        // Calling DAO.
        const allConnections = await connectionDAOcalls.getAll();                              // Get All Connections from DAO.

        const DTOConnections = allConnections.map((connection) => dtoMapper(connection, new connectionDTO()));    // Transforming objects with DTO.

        res.status(200).json(DTOConnections);

    } catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

