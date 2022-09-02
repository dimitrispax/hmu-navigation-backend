import WinstonLoggingHandler from './Loggers/_winstonLoggingHandler';
import ILoggingHandler from './_ILoggingHandler';
import { ILogger } from './Loggers/ILogger';
import LogLevels from './Levels/levelsEnum';

class SillyLogHandler implements ILoggingHandler {

   nextHandler: ILoggingHandler | null;
   logger: ILogger;

   constructor(logger: ILogger) {
      this.logger = logger;
   }

   setNextHandler(handler: ILoggingHandler | null): void {
      this.nextHandler = handler;
   }

   public log(logLevel: LogLevels, logBody: any): void {
      if (logLevel == LogLevels.SILLY) {
         this.logger.logVerbose(logBody)
      }
      else {
         if (this.nextHandler != null) {
            this.nextHandler.log(logLevel, logBody);
         }
      }
   }

}

export default SillyLogHandler