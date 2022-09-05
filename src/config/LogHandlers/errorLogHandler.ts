import ILoggingHandler from './_ILoggingHandler';
import LogLevels from './Levels/levelsEnum';
import WinstonLoggingHandler from './Loggers/_winstonLoggingHandler';
import { ILogger } from './Loggers/ILogger';

class ErrorLogHandler implements ILoggingHandler {

    nextHandler: ILoggingHandler | null;
    logger: ILogger;

    constructor(logger: ILogger, nextHandler: ILoggingHandler | null = null) {
        this.logger = logger;
        this.nextHandler = nextHandler;
    }

    setNextHandler(handler: ILoggingHandler | null): void {
        this.nextHandler = handler;
    }

    public log(logLevel: LogLevels, logBody: any): void {
        if (logLevel == LogLevels.ERROR) {
            this.logger.logError(logBody)
        }
        else {
            if (this.nextHandler != null) {
                this.nextHandler.log(logLevel, logBody);
            }
        }
    }

}

export default ErrorLogHandler