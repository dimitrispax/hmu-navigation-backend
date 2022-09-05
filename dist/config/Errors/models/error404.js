"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error404 = void 0;
const httpStatusCode_1 = require("../../Enums/httpStatusCode");
const baseError_1 = require("./baseError");
class Error404 extends baseError_1.BaseError {
    constructor(name, exactError, message = 'Not found.', statusCode = httpStatusCode_1.HttpStatusCode.NOT_FOUND) {
        super(name, statusCode, message, exactError);
    }
}
exports.Error404 = Error404;
//# sourceMappingURL=error404.js.map