import { Request, Response, NextFunction } from 'express';

import { buildingDAO } from '../../data/dao/buildingDAO';
import BuildingDTO from '../../domain/dto/buildingDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllBuildings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const buildingsDAOCalls = new buildingDAO();                                        // Calling DAO.
        const allBuildings = await buildingsDAOCalls.getAll();                              // Get All Doors from DAO.

        const DTOBuildings = allBuildings.map((building) => dtoMapper(building, new BuildingDTO()));    // Transforming objects with DTO.

        res.status(200).json({
            type: "FeatureCollection",
            features: DTOBuildings
        })
    } catch (err) {
        console.log("ERROR")
        return next(err)
    }
}


