import { Request, Response, NextFunction } from 'express';
declare const httpErrorHandlerMiddleware: (err: any, req: Request, res: Response, next: NextFunction) => void;
export { httpErrorHandlerMiddleware };
