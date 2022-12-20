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
exports.getAllDoors = void 0;
const doorDAO_1 = require("../../data/dao/doorDAO");
const doorDTO_1 = __importDefault(require("../../domain/dto/doorDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllDoors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doorsDAOCalls = new doorDAO_1.doorDAO(); // Calling DAO.
        const allDoors = yield doorsDAOCalls.getAll(); // Get All Doors from DAO.
        const DTODoors = allDoors.map((door) => (0, dtoMapper_1.default)(door, new doorDTO_1.default())); // Transforming objects with DTO.
        return DTODoors;
    }
    catch (err) {
        console.log("ERROR");
        return err;
    }
});
exports.getAllDoors = getAllDoors;
//# sourceMappingURL=doorControllers.js.map