import ILoggingHandler from './_ILoggingHandler';
import { ILogger } from './Loggers/ILogger';
import LogLevels from './Levels/levelsEnum';
declare class SillyLogHandler implements ILoggingHandler {
    nextHandler: ILoggingHandler | null;
    logger: ILogger;
    constructor(logger: ILogger, nextHandler?: ILoggingHandler | null);
    setNextHandler(handler: ILoggingHandler | null): void;
    log(logLevel: LogLevels, logBody: any): void;
}
export default SillyLogHandler;
