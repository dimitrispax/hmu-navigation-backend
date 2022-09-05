"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(name, statusCode, message, exactError) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.exactError = exactError;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getStatusCode() {
        return this.statusCode;
    }
    setStatusCode(value) {
        this.statusCode = value;
    }
    getExactError() {
        return this.exactError;
    }
    setExactError(value) {
        this.exactError = value;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=baseError.js.map