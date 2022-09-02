"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorHandler_1 = __importDefault(require("./httpErrorHandler"));
const fatalErrorHandler_1 = __importDefault(require("./fatalErrorHandler"));
class ErrorHandlingService {
    constructor() {
        ErrorHandlingService.httpErrorHandler.setNextHandler(ErrorHandlingService.fatalErrorHandler);
        ErrorHandlingService.fatalErrorHandler.setNextHandler(null);
        ErrorHandlingService.rootErrorHandler = ErrorHandlingService.httpErrorHandler;
    }
    static log(errorLevel, errorBody) {
        if (errorLevel != null && errorBody != null)
            ErrorHandlingService.rootErrorHandler.handle(errorLevel, errorBody);
    }
}
ErrorHandlingService.httpErrorHandler = new httpErrorHandler_1.default();
ErrorHandlingService.fatalErrorHandler = new fatalErrorHandler_1.default();
//# sourceMappingURL=errorHandlingService.js.map