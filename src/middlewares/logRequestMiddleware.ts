import { Request, Response, NextFunction } from 'express';
import LogLevels from '../config/LogHandlers/Levels/levelsEnum';
import LoggingService from '../domain/useCases/loggingService';


const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const loggingService = new LoggingService()
    const requestMethod: string = req.method;
    const requestURL: string = req.url;
    const requestIP: string | string[] | undefined = req.headers['x-real-ip'] || req.socket.remoteAddress;

    // LOG EVERY REQUEST AT HTTP LEVEL
    loggingService.log(LogLevels.HTTP, `REQUEST => [${requestMethod}]: '${requestURL}', IP: ${requestIP}`)
    // console.log(`REQUEST => [${requestMethod}]: '${requestURL}', IP: ${requestIP}`);

    next()
}

export { logRequestMiddleware }