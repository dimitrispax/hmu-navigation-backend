import ILoggingHandler from './_ILoggingHandler';
import LogLevels from './Levels/levelsEnum';
import { ILogger } from './Loggers/ILogger';
declare class WarningLogHandler implements ILoggingHandler {
    nextHandler: ILoggingHandler | null;
    logger: ILogger;
    constructor(logger: ILogger, nextHandler?: ILoggingHandler | null);
    setNextHandler(handler: ILoggingHandler | null): void;
    log(logLevel: LogLevels, logBody: any): void;
}
export default WarningLogHandler;
