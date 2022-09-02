import LogLevels from './Levels/levelsEnum';
import { ILogger } from './Loggers/ILogger';

interface ILoggingHandler {

    nextHandler: ILoggingHandler | null;
    logger: ILogger;

    setNextHandler(handler: ILoggingHandler | null): void;

    log(loglevel: LogLevels, logBody: any): void;

}

export default ILoggingHandler;