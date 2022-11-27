"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMRBSData = void 0;
const MRBSService_1 = require("../../domain/services/MRBSService");
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllMRBSData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MRBSData = yield (0, MRBSService_1.getMRBSData)();
        res.status(200).send(MRBSData);
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getAllMRBSData = getAllMRBSData;
//# sourceMappingURL=MRBSControllers.js.map