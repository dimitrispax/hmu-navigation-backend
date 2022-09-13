"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpErrorHandler = exports.middleware = void 0;
const middleware = (req, res, next) => {
    //calls services or use cases
    next();
};
exports.middleware = middleware;
const loggingService_1 = __importDefault(require("../domain/useCases/loggingService"));
const levelsEnum_1 = __importDefault(require("../config/LogHandlers/Levels/levelsEnum"));
const httpErrorHandler = (err, req, res, next) => {
    var _a, _b;
    const loggingService = new loggingService_1.default();
    const requestURI = req.url;
    const requestMethod = req.method;
    const requestIP = req.headers['x-real-ip'] || req.socket.remoteAddress;
    let errorStatus = 500;
    let errorMessage = 'Internal Server Error';
    if (typeof err.response !== "undefined") {
        // HERE WE HAVE AN AXIOS ERROR
        console.log('==== Axios Error ====');
        errorStatus = err.response.status;
        if (err.response.status == 500) {
            // IF FOREIGN MICROSERVICE THREW A 500 STATUS ERROR
            console.log('Axios Error 500');
            errorMessage = 'Foreign Module: Internal Server Error';
        }
        else {
            errorMessage = 'Foreign Module: ' + ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data.error.message);
            console.log((_b = err.response) === null || _b === void 0 ? void 0 : _b.data.error.message);
        }
    }
    else {
        // HERE WE HAVE A NON-AXIOS ERROR
        console.log('==== Non Axios Error ====');
        errorStatus = (err === null || err === void 0 ? void 0 : err.status) || 500;
        errorMessage = err.message;
        console.log(err.message);
        console.log(err.stack);
    }
    // const errorStatus: number = typeof err.response !== "undefined" ? err.response.status : (err.status !== undefined ? err.status : 500);
    // const errorMessage: string = typeof err.response !== "undefined" ? err.response.data.error.message : err.message;
    // console.log('FInal Status:', errorStatus)
    // console.log('Final Message:', errorMessage)
    // console.log(err.message)
    // console.log(err.stack)
    // console.log(err.response)
    if (errorStatus === 500) {
        loggingService.log(levelsEnum_1.default.ERROR, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`);
    }
    loggingService.log(levelsEnum_1.default.HTTP, `REQUEST => [${requestMethod}]: '${requestURI}', IP: ${requestIP} , ERROR => [${errorStatus}]: ${errorMessage}`);
    // RESPONSE
    res.status(errorStatus).json({
        success: false,
        error: {
            message: errorMessage
        }
    });
};
exports.httpErrorHandler = httpErrorHandler;
//# sourceMappingURL=httpErrorMiddleware.js.map