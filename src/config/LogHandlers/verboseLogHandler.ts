import ILoggingHandler from './_ILoggingHandler';
import LogLevels from './Levels/levelsEnum';
import WinstonLoggingHandler from './Loggers/_winstonLoggingHandler';
import { ILogger } from './Loggers/ILogger';

class VerboseLogHandler implements ILoggingHandler {

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
        if (logLevel == LogLevels.VERBOSE) {
            this.logger.logVerbose(logBody)
        }
        else {
            if (this.nextHandler != null) {
                this.nextHandler.log(logLevel, logBody);
            }
        }
    }

}

export default VerboseLogHandler