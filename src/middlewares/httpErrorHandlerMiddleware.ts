import { Request, Response, NextFunction } from 'express';
import LoggingService from '../domain/useCases/loggingService';
import LogLevels from '../config/LogHandlers/Levels/levelsEnum';


const httpErrorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const loggingService = new LoggingService()
    const requestURI: string = req.url;
    const requestMethod: string = req.method;
    const errorStatus: number = err.statusCode || 500;
    const errorMessage: string = err.message;
    const requestIP: string | string[] | undefined = req.headers['x-real-ip'] || req.socket.remoteAddress;

    /* IF error status is 500 it means that there is an error, it sorts it as an ERROR log. */
    if (errorStatus === 500) { loggingService.log(LogLevels.ERROR, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`) }
    /* ELSE, sort each error as a HTTP log. */
    loggingService.log(LogLevels.HTTP, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`)


    /* RESPONSE */
    res.status(errorStatus).json({
        success: false,
        error: {
            message: (errorStatus === 500) ? 'Internal Server Error' : errorMessage
        }
    })
}

export {
    httpErrorHandlerMiddleware
}
