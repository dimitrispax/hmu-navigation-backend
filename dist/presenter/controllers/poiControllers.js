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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPois = void 0;
const poiDAO_1 = require("../../data/dao/poiDAO");
const poiDTO_1 = __importDefault(require("../../domain/dto/poiDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllPois = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const poiDAOcalls = new poiDAO_1.poiDAO(); // Calling DAO.
        const allPoi = yield poiDAOcalls.getAll(); // Get All POI from DAO.
        const DTOPoi = allPoi.map((poi) => (0, dtoMapper_1.default)(poi, new poiDTO_1.default())); // Transforming objects with DTO.
        return DTOPoi;
    }
    catch (err) {
        console.log("ERROR");
        return err;
    }
});
exports.getAllPois = getAllPois;
//# sourceMappingURL=poiControllers.js.map