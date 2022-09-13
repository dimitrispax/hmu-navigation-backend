import { Request, Response, NextFunction } from 'express';
declare const logRequestMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export { logRequestMiddleware };
