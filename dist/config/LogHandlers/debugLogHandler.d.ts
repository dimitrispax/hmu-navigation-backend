import ILoggingHandler from './_ILoggingHandler';
import LogLevels from './Levels/levelsEnum';
import { ILogger } from './Loggers/ILogger';
declare class DebugLogHandler implements ILoggingHandler {
    constructor(logger: ILogger, nextHandler?: ILoggingHandler | null);
    nextHandler: ILoggingHandler | null;
    logger: ILogger;
    setNextHandler(handler: ILoggingHandler | null): void;
    log(logLevel: LogLevels, logBody: any): void;
}
export default DebugLogHandler;
