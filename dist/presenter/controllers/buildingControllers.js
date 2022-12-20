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
exports.getAllBuildings = void 0;
const buildingDAO_1 = require("../../data/dao/buildingDAO");
const buildingDTO_1 = __importDefault(require("../../domain/dto/buildingDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllBuildings = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buildingsDAOCalls = new buildingDAO_1.buildingDAO(); // Calling DAO.
        const allBuildings = yield buildingsDAOCalls.getAll(); // Get All Doors from DAO.
        const DTOBuildings = allBuildings.map((building) => (0, dtoMapper_1.default)(building, new buildingDTO_1.default())); // Transforming objects with DTO.
        return {
            type: "FeatureCollection",
            features: DTOBuildings
        };
    }
    catch (err) {
        console.log("ERROR");
        return err;
    }
});
exports.getAllBuildings = getAllBuildings;
//# sourceMappingURL=buildingControllers.js.map