import ILoggingHandler from '../../config/LogHandlers/_ILoggingHandler';
import LogLevels from '../../config/LogHandlers/Levels/levelsEnum';
import { ILogger } from '../../config/LogHandlers/Loggers/ILogger';
declare class LoggingService {
    protected static logger: ILogger;
    protected static errorHandler: ILoggingHandler;
    protected static warnHandler: ILoggingHandler;
    protected static infoHandler: ILoggingHandler;
    protected static httpHandler: ILoggingHandler;
    protected static verboseHandler: ILoggingHandler;
    protected static debugHandler: ILoggingHandler;
    protected static sillyHandler: ILoggingHandler;
    protected static rootHandler: ILoggingHandler;
    constructor();
    log(loglevel: LogLevels, logBody: any): void;
}
export default LoggingService;
