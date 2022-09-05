"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error500 = void 0;
const httpStatusCode_1 = require("../../Enums/httpStatusCode");
const baseError_1 = require("./baseError");
class Error500 extends baseError_1.BaseError {
    constructor(name, exactError, message = 'Sorry Something Went Wrong', statusCode = httpStatusCode_1.HttpStatusCode.INTERNAL_SERVER) {
        super(name, statusCode, message, exactError);
    }
}
exports.Error500 = Error500;
//# sourceMappingURL=error500.js.map