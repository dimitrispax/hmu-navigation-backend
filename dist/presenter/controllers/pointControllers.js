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
exports.getAllPoints = void 0;
const pointDAO_1 = require("../../data/dao/pointDAO");
const pointDTO_1 = __importDefault(require("../../domain/dto/pointDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllPoints = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pointDAOcalls = new pointDAO_1.pointDAO(); // Calling DAO.
        const allPoints = yield pointDAOcalls.getAll(); // Get All Points from DAO.
        const DTOPoints = allPoints.map((point) => (0, dtoMapper_1.default)(point, new pointDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json(DTOPoints);
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getAllPoints = getAllPoints;
//# sourceMappingURL=pointControllers.js.map