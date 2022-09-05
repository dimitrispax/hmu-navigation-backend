import ErrorHandler from './errorHandler';
import ErrorLevels from './Levels/levelsEnum';
declare class HttpErrorHandler extends ErrorHandler {
    constructor();
    handle(errorLevel: ErrorLevels, logBody: any): void;
}
export default HttpErrorHandler;
