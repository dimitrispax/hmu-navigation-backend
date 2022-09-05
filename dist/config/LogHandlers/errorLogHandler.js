"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const levelsEnum_1 = __importDefault(require("./Levels/levelsEnum"));
class ErrorLogHandler {
    constructor(logger, nextHandler = null) {
        this.logger = logger;
        this.nextHandler = nextHandler;
    }
    setNextHandler(handler) {
        this.nextHandler = handler;
    }
    log(logLevel, logBody) {
        if (logLevel == levelsEnum_1.default.ERROR) {
            this.logger.logError(logBody);
        }
        else {
            if (this.nextHandler != null) {
                this.nextHandler.log(logLevel, logBody);
            }
        }
    }
}
exports.default = ErrorLogHandler;
//# sourceMappingURL=errorLogHandler.js.map