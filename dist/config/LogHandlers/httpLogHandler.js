"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const levelsEnum_1 = __importDefault(require("./Levels/levelsEnum"));
class HttpLogHandler {
    constructor(logger, nextHandler = null) {
        this.logger = logger;
        this.nextHandler = nextHandler;
    }
    setNextHandler(handler) {
        this.nextHandler = handler;
    }
    log(logLevel, logBody) {
        if (logLevel == levelsEnum_1.default.HTTP) {
            this.logger.logHttp(logBody);
        }
        else {
            if (this.nextHandler != null) {
                this.nextHandler.log(logLevel, logBody);
            }
        }
    }
}
exports.default = HttpLogHandler;
//# sourceMappingURL=httpLogHandler.js.map