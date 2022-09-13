"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErrorHandlerMiddleware = void 0;
const loggingService_1 = __importDefault(require("../domain/useCases/loggingService"));
const levelsEnum_1 = __importDefault(require("../config/LogHandlers/Levels/levelsEnum"));
const httpErrorHandlerMiddleware = (err, req, res, next) => {
    const loggingService = new loggingService_1.default();
    const requestURI = req.url;
    const requestMethod = req.method;
    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message;
    const requestIP = req.headers['x-real-ip'] || req.socket.remoteAddress;
    if (errorStatus === 500) {
        loggingService.log(levelsEnum_1.default.ERROR, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`);
    }
    loggingService.log(levelsEnum_1.default.HTTP, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`);
    console.log(":::::::LOGS:::::::");
    console.log("errorMessage: ", errorMessage);
    console.log("requestURI: ", requestURI);
    console.log("requestMethod: ", requestMethod);
    console.log("errorStatus: ", errorStatus);
    /* RESPONSE */
    res.status(errorStatus).json({
        success: false,
        error: {
            message: (errorStatus === 500) ? 'Internal Server Error' : errorMessage
        }
    });
};
exports.httpErrorHandlerMiddleware = httpErrorHandlerMiddleware;
//# sourceMappingURL=httpErrorHandlerMiddleware.js.map