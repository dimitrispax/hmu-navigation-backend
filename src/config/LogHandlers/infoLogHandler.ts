import ILoggingHandler from './_ILoggingHandler';
import LogLevels from './Levels/levelsEnum';
import { ILogger } from './Loggers/ILogger';

class InfoLogHandler implements ILoggingHandler {

    nextHandler: ILoggingHandler;
    logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    setNextHandler(handler: ILoggingHandler): void {
        this.nextHandler = handler;
    }

    public log(logLevel: LogLevels, logBody: any): void {
        if (logLevel == LogLevels.INFO)
            this.logger.logInfo(logBody);
        else
            if (this.nextHandler != null)
                this.nextHandler.log(logLevel, logBody);
    }

}

export default InfoLogHandler