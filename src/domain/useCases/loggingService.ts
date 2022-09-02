import DebugLogHandler from '../../config/LogHandlers/debugLogHandler';
import ErrorLogHandler from '../../config/LogHandlers/errorLogHandler';
import HttpLogHandler from '../../config/LogHandlers/httpLogHandler';
import ILoggingHandler from '../../config/LogHandlers/_ILoggingHandler';
import InfoLogHandler from '../../config/LogHandlers/infoLogHandler';
import LogLevels from '../../config/LogHandlers/Levels/levelsEnum';
import VerboseLogHandler from '../../config/LogHandlers/verboseLogHandler';
import WarningLogHandler from '../../config/LogHandlers/warningLogHandler';
import WinstonLoggingHandler from '../../config/LogHandlers/Loggers/_winstonLoggingHandler';
import { ILogger } from '../../config/LogHandlers/Loggers/ILogger';
import SillyLogHandler from '../../config/LogHandlers/sillyLoggingHandler';

class LoggingService {

    protected static logger: ILogger = new WinstonLoggingHandler()
    protected static errorHandler: ILoggingHandler = new ErrorLogHandler(LoggingService.logger);
    protected static warnHandler: ILoggingHandler = new WarningLogHandler(LoggingService.logger);
    protected static infoHandler: ILoggingHandler = new InfoLogHandler(LoggingService.logger);
    protected static httpHandler: ILoggingHandler = new HttpLogHandler(LoggingService.logger);
    protected static verboseHandler: ILoggingHandler = new VerboseLogHandler(LoggingService.logger);
    protected static debugHandler: ILoggingHandler = new DebugLogHandler(LoggingService.logger);
    protected static sillyHandler: ILoggingHandler = new SillyLogHandler(LoggingService.logger);
    protected static rootHandler: ILoggingHandler;

    constructor() {
        LoggingService.errorHandler.setNextHandler(LoggingService.warnHandler);
        LoggingService.warnHandler.setNextHandler(LoggingService.infoHandler);
        LoggingService.infoHandler.setNextHandler(LoggingService.httpHandler);
        LoggingService.httpHandler.setNextHandler(LoggingService.verboseHandler);
        LoggingService.verboseHandler.setNextHandler(LoggingService.debugHandler);
        LoggingService.debugHandler.setNextHandler(LoggingService.sillyHandler);
        LoggingService.sillyHandler.setNextHandler(null);
        LoggingService.rootHandler = LoggingService.errorHandler;
    }

    public log(loglevel: LogLevels, logBody: any): void {
        if (loglevel != null && logBody != null) {
            LoggingService.rootHandler.log(loglevel, logBody);
        }
    }
}

export default LoggingService;