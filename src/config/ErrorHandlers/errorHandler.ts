import IErrorHandler from './IErrorHandler';
import LogLevels from './Levels/levelsEnum';

abstract class ErrorHandler implements IErrorHandler {

    protected nextHandler: IErrorHandler | null;

    setNextHandler(handler: IErrorHandler | null): void {
        this.nextHandler = handler;
    }
    handle(errorLevel: LogLevels, errorBody: any): void {
        throw new Error('Method not implemented.');
    }


}

export default ErrorHandler;