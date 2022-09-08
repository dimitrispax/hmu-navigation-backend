import { Request, Response, NextFunction } from 'express';
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
export declare const getAllRooms: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomByID: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByDescription: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByCamera: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByProjector: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByManager: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByFloor: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByUsage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByCapacity: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**************************************************************/
/********************* COMPLEX GET QUERIES ********************/
/**************************************************************/
export declare const getRoomsByCapacityAndCameraAndProjector: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByUsageAndCapacity: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByUsageAndCapacityAndCamera: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByUsageAndCapacityAndProjector: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/
export declare const updateRoom: (req: Request, res: Response, next: NextFunction) => Promise<void>;
