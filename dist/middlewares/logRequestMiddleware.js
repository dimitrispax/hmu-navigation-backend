"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequestMiddleware = void 0;
const levelsEnum_1 = __importDefault(require("../config/LogHandlers/Levels/levelsEnum"));
const loggingService_1 = __importDefault(require("../domain/useCases/loggingService"));
const logRequestMiddleware = (req, res, next) => {
    const loggingService = new loggingService_1.default();
    const requestMethod = req.method;
    const requestURL = req.url;
    const requestIP = req.headers['x-real-ip'] || req.socket.remoteAddress;
    // LOG EVERY REQUEST AT HTTP LEVEL
    loggingService.log(levelsEnum_1.default.HTTP, `REQUEST => [${requestMethod}]: '${requestURL}', IP: ${requestIP}`);
    // console.log(`REQUEST => [${requestMethod}]: '${requestURL}', IP: ${requestIP}`);
    next();
};
exports.logRequestMiddleware = logRequestMiddleware;
//# sourceMappingURL=logRequestMiddleware.js.map