import { Request, Response, NextFunction } from 'express';
import { createLogger } from 'winston';

import { poiDAO } from '../../data/dao/poiDAO';
import poiDTO from '../../domain/dto/poiDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllPois = async () => {
    try {
        const poiDAOcalls = new poiDAO();                                    // Calling DAO.
        const allPoi = await poiDAOcalls.getAll();                           // Get All POI from DAO.

        const DTOPoi = allPoi.map((poi) => dtoMapper(poi, new poiDTO()));    // Transforming objects with DTO.

        return DTOPoi;

    } catch (err) {
        console.log("ERROR")
        return err
    }
}


