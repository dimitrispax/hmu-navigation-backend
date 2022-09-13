export declare const middleware: (req: any, res: any, next: any) => void;
import { Request, Response, NextFunction } from 'express';
declare const httpErrorHandler: (err: any, req: Request, res: Response, next: NextFunction) => void;
export { httpErrorHandler };
