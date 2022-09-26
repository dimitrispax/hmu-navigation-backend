import { Request, Response, NextFunction } from 'express';
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
export declare const getFloorByID: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getDoorsByID: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getBuildingByID: (req: Request, res: Response, next: NextFunction) => Promise<void>;
