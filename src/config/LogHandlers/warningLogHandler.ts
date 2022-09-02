import ILoggingHandler from './_ILoggingHandler';
import LogLevels from './Levels/levelsEnum';
import WinstonLoggingHandler from './Loggers/_winstonLoggingHandler';
import { ILogger } from './Loggers/ILogger';

class WarningLogHandler implements ILoggingHandler {


    nextHandler: ILoggingHandler | null;
    logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    setNextHandler(handler: ILoggingHandler | null): void {
        this.nextHandler = handler;
    }

    public log(logLevel: LogLevels, logBody: any): void {
        if (logLevel == LogLevels.WARN) {
            this.logger.logWarn(logBody)
        }
        else {
            if (this.nextHandler != null) {
                this.nextHandler.log(logLevel, logBody);
            }
        }
    }

}

export default WarningLogHandler