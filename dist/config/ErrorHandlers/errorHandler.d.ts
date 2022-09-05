import IErrorHandler from './IErrorHandler';
import LogLevels from './Levels/levelsEnum';
declare abstract class ErrorHandler implements IErrorHandler {
    protected nextHandler?: IErrorHandler | null;
    setNextHandler(handler: IErrorHandler | null): void;
    handle(errorLevel: LogLevels, errorBody: any): void;
}
export default ErrorHandler;
