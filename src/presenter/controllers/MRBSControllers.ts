import { Request, Response, NextFunction } from 'express';
import { Error404 } from '../../config/Errors/models/error404';
import { getMRBSBuildingByID, getMRBSDoorsByID, getMRBSFloorByID } from '../../domain/servrices/MRBSService';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getFloorByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const floor = await getMRBSFloorByID(req.params.floorID);

        if (floor.features.length === 0) { throw new Error404(`Floor with id ${req.params.floorID} was not found.`, null) }

        res.status(200).send({
            found: true,
            floor: floor
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }

}

export const getDoorsByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const doors = await getMRBSDoorsByID(req.params.roomID);

        if (doors.length === 0) { throw new Error404(`Room with id ${req.params.roomID} was not found.`, null) }

        res.status(200).send({
            found: true,
            doors: doors
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }

}

export const getBuildingByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const building = await getMRBSBuildingByID(req.params.buildingID);

        if (building.features.length === 0) { throw new Error404(`Building with id ${req.params.buildingID} was not found.`, null) }


        res.status(200).send({
            found: true,
            building: building
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }

}











