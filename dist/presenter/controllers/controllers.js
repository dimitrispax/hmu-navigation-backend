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
exports.getAllRooms = void 0;
const roomDAO_1 = require("../../data/dao/roomDAO");
const roomDTO_1 = __importDefault(require("../../domain/dto/roomDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/* CHANGE ANY TYPES TO SPECIFIC TYPES */
const getAllRooms = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const allRooms = yield roomsDAOCalls.getAll(); // Get All Rooms from DAO.
        console.log("all rooms: ", allRooms);
        const DTORooms = allRooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: 'All rooms',
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getAllRooms = getAllRooms;
//# sourceMappingURL=controllers.js.map