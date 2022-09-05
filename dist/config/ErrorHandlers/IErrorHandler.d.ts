import ErrorLevels from './Levels/levelsEnum';
interface IErrorHandler {
    setNextHandler(handler: IErrorHandler): void;
    handle(errorLevel: ErrorLevels, errorBody: any): void;
}
export default IErrorHandler;
