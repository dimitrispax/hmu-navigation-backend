"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("./errorHandler"));
const levelsEnum_1 = __importDefault(require("./Levels/levelsEnum"));
class HttpErrorHandler extends errorHandler_1.default {
    constructor() {
        super();
    }
    handle(errorLevel, logBody) {
        if (errorLevel == levelsEnum_1.default.HTTP)
            throw new Error('Method not implemented.');
        else if (this.nextHandler != null)
            this.nextHandler.handle(errorLevel, logBody);
    }
}
exports.default = HttpErrorHandler;
//# sourceMappingURL=httpErrorHandler.js.map