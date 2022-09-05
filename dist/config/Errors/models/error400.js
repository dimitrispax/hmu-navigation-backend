"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error400 = void 0;
const httpStatusCode_1 = require("../../Enums/httpStatusCode");
const baseError_1 = require("./baseError");
class Error400 extends baseError_1.BaseError {
    constructor(name, exactError, message = 'Request is not correct', statusCode = httpStatusCode_1.HttpStatusCode.BAD_REQUEST) {
        super(name, statusCode, message, exactError);
    }
}
exports.Error400 = Error400;
//# sourceMappingURL=error400.js.map