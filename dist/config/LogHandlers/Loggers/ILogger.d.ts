export interface ILogger {
    logError(object: any): void;
    logWarn(object: any): void;
    logInfo(object: any): void;
    logHttp(object: any): void;
    logVerbose(object: any): void;
    logDebug(object: any): void;
    logSilly(object: any): void;
}
