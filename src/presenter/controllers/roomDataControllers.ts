import { Request, Response, NextFunction } from 'express';
import { getRoomData } from '../../domain/services/RoomDataService';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllRoomData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const roomData = await getRoomData();
        res.status(200).send(roomData);
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }

}









