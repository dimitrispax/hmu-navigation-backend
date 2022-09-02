import HttpLogHandler from './httpErrorHandler';
import LogLevels from './Levels/levelsEnum';
import WinstonLoggingHandler from './errorHandler';
import ErrorHandler from './errorHandler';
import HttpErrorHandler from './httpErrorHandler';
import ErrorLevels from './Levels/levelsEnum';
import FatalErrorHandler from './fatalErrorHandler';

class ErrorHandlingService {

    protected static httpErrorHandler: ErrorHandler = new HttpErrorHandler();
    protected static fatalErrorHandler: FatalErrorHandler = new FatalErrorHandler();
    protected static rootErrorHandler: WinstonLoggingHandler;

    constructor() {
        ErrorHandlingService.httpErrorHandler.setNextHandler(ErrorHandlingService.fatalErrorHandler);
        ErrorHandlingService.fatalErrorHandler.setNextHandler(null);
        ErrorHandlingService.rootErrorHandler = ErrorHandlingService.httpErrorHandler;
    }

    public static log(errorLevel: ErrorLevels, errorBody: any): void {
        if (errorLevel != null && errorBody != null)
            ErrorHandlingService.rootErrorHandler.handle(errorLevel, errorBody);
    }

}