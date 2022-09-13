import LoggingService from '../domain/useCases/loggingService';
import LogLevels from '../config/LogHandlers/Levels/levelsEnum';
import { Request, Response, NextFunction } from 'express';

const httpErrorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const loggingService = new LoggingService()
    const requestURI: string = req.url;
    const requestMethod: string = req.method;
    const requestIP: string | string[] | undefined = req.headers['x-real-ip'] || req.socket.remoteAddress;

    let errorStatus: number = 500
    let errorMessage: string = 'Internal Server Error'

    /* UNDEFINED ERROR */
    console.log('-------> An undefined ERROR has occured. <-------')
    errorStatus = err?.status || 500
    errorMessage = err.message
    console.log(err.message)
    console.log(err.stack)

    if (errorStatus === 500) { loggingService.log(LogLevels.ERROR, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`) }

    loggingService.log(LogLevels.HTTP, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`)

    /* RESPONSE */
    res.status(errorStatus).json({
        success: false,
        error: {
            message: errorMessage
        }
    })
}

export { httpErrorHandlerMiddleware }