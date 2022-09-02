"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    setNextHandler(handler) {
        this.nextHandler = handler;
    }
    handle(errorLevel, errorBody) {
        throw new Error('Method not implemented.');
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=errorHandler.js.map