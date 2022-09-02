"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debugLogHandler_1 = __importDefault(require("../../config/LogHandlers/debugLogHandler"));
const errorLogHandler_1 = __importDefault(require("../../config/LogHandlers/errorLogHandler"));
const httpLogHandler_1 = __importDefault(require("../../config/LogHandlers/httpLogHandler"));
const infoLogHandler_1 = __importDefault(require("../../config/LogHandlers/infoLogHandler"));
const verboseLogHandler_1 = __importDefault(require("../../config/LogHandlers/verboseLogHandler"));
const warningLogHandler_1 = __importDefault(require("../../config/LogHandlers/warningLogHandler"));
const _winstonLoggingHandler_1 = __importDefault(require("../../config/LogHandlers/Loggers/_winstonLoggingHandler"));
const sillyLoggingHandler_1 = __importDefault(require("../../config/LogHandlers/sillyLoggingHandler"));
class LoggingService {
    constructor() {
        LoggingService.errorHandler.setNextHandler(LoggingService.warnHandler);
        LoggingService.warnHandler.setNextHandler(LoggingService.infoHandler);
        LoggingService.infoHandler.setNextHandler(LoggingService.httpHandler);
        LoggingService.httpHandler.setNextHandler(LoggingService.verboseHandler);
        LoggingService.verboseHandler.setNextHandler(LoggingService.debugHandler);
        LoggingService.debugHandler.setNextHandler(LoggingService.sillyHandler);
        LoggingService.sillyHandler.setNextHandler(null);
        LoggingService.rootHandler = LoggingService.errorHandler;
    }
    log(loglevel, logBody) {
        if (loglevel != null && logBody != null) {
            LoggingService.rootHandler.log(loglevel, logBody);
        }
    }
}
LoggingService.logger = new _winstonLoggingHandler_1.default();
LoggingService.errorHandler = new errorLogHandler_1.default(LoggingService.logger);
LoggingService.warnHandler = new warningLogHandler_1.default(LoggingService.logger);
LoggingService.infoHandler = new infoLogHandler_1.default(LoggingService.logger);
LoggingService.httpHandler = new httpLogHandler_1.default(LoggingService.logger);
LoggingService.verboseHandler = new verboseLogHandler_1.default(LoggingService.logger);
LoggingService.debugHandler = new debugLogHandler_1.default(LoggingService.logger);
LoggingService.sillyHandler = new sillyLoggingHandler_1.default(LoggingService.logger);
exports.default = LoggingService;
//# sourceMappingURL=loggingService.js.map