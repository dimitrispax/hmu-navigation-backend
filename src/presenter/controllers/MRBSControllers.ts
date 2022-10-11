import { Request, Response, NextFunction } from 'express';
import { Error404 } from '../../config/Errors/models/error404';
import { getMRBSData } from '../../domain/services/MRBSService';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllMRBSData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const MRBSData = await getMRBSData();
        res.status(200).send({
            success: true,
            MRBSData
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }

}









