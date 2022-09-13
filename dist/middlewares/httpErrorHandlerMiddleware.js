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
    const requestIP = req.headers['x-real-ip'] || req.socket.remoteAddress;
    let errorStatus = 500;
    let errorMessage = 'Internal Server Error';
    /* UNDEFINED ERROR */
    console.log('-------> An undefined ERROR has occured. <-------');
    errorStatus = (err === null || err === void 0 ? void 0 : err.status) || 500;
    errorMessage = err.message;
    console.log(err.message);
    console.log(err.stack);
    if (errorStatus === 500) {
        loggingService.log(levelsEnum_1.default.ERROR, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`);
    }
    loggingService.log(levelsEnum_1.default.HTTP, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`);
    /* RESPONSE */
    res.status(errorStatus).json({
        success: false,
        error: {
            message: errorMessage
        }
    });
};
exports.httpErrorHandlerMiddleware = httpErrorHandlerMiddleware;
//# sourceMappingURL=httpErrorHandlerMiddleware.js.map