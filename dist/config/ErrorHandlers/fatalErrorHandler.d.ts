import ErrorHandler from './errorHandler';
import ErrorLevels from './Levels/levelsEnum';
declare class FatalErrorHandler extends ErrorHandler {
    constructor();
    handle(errorLevel: ErrorLevels, logBody: any): void;
}
export default FatalErrorHandler;
