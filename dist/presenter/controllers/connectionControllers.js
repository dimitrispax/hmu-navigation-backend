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
exports.getAllConnections = void 0;
const connectionDAO_1 = require("../../data/dao/connectionDAO");
const connectionDTO_1 = __importDefault(require("../../domain/dto/connectionDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllConnections = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectionDAOcalls = new connectionDAO_1.connectionDAO(); // Calling DAO.
        const allConnections = yield connectionDAOcalls.getAll(); // Get All Connections from DAO.
        const DTOConnections = allConnections.map((connection) => (0, dtoMapper_1.default)(connection, new connectionDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json(DTOConnections);
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getAllConnections = getAllConnections;
//# sourceMappingURL=connectionControllers.js.map