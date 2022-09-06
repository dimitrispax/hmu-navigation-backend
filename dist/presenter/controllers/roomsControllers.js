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
exports.getRoomsByCapacity = exports.getRoomsByUsage = exports.getRoomsByFloor = exports.getRoomsByManager = exports.getRoomsByProjector = exports.getRoomsByCamera = exports.getRoomsByDescription = exports.getRoomByID = exports.getAllRooms = void 0;
const error400_1 = require("../../config/Errors/models/error400");
const error404_1 = require("../../config/Errors/models/error404");
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
const getRoomByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomID = req.params.roomID;
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const room = yield roomsDAOCalls.getById(roomID); // Get room by ID from DAO.
        if (!room) {
            throw new error404_1.Error404(`Room with id ${roomID} was not found.`, null);
        }
        res.status(200).json({
            found: true,
            room
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomByID = getRoomByID;
const getRoomsByDescription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomDescription = req.params.roomDescription;
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const room = yield roomsDAOCalls.getRoomsByDescription(roomDescription); // Get room by description from DAO.
        if ((room === null || room === void 0 ? void 0 : room.length) === 0) {
            throw new error404_1.Error404(`Room with description ${roomDescription} was not found.`, null);
        }
        const DTORooms = room.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Room with description ${roomDescription} found`,
            room: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByDescription = getRoomsByDescription;
const getRoomsByCamera = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomCamera = parseInt(req.params.roomCamera);
        if (isNaN(roomCamera)) {
            throw new error400_1.Error400('camera field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByCamera(roomCamera); // Get room by camera from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that contain a camera.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with camera`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByCamera = getRoomsByCamera;
const getRoomsByProjector = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomProjector = parseInt(req.params.roomProjector);
        if (isNaN(roomProjector)) {
            throw new error400_1.Error400('projector field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByProjector(roomProjector); // Get room by projector from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that contain a projector.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with projector`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByProjector = getRoomsByProjector;
const getRoomsByManager = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomManager = req.params.roomManager;
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByManager(roomManager); // Get room by manager from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There is no room managed by ${roomManager}.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms managed by ${roomManager}.`,
            count: DTORooms.length,
            room: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByManager = getRoomsByManager;
const getRoomsByFloor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomFloor = req.params.roomFloor;
        console.log('Room: ', roomFloor);
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByFloor(roomFloor); // Get room by floor from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There is no room at floor ${roomFloor}.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms at ${roomFloor} floor.`,
            count: DTORooms.length,
            room: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByFloor = getRoomsByFloor;
const getRoomsByUsage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomUsageID = parseInt(req.params.roomUsageID);
        if (isNaN(roomUsageID)) {
            throw new error400_1.Error400('usageId field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByUsage(roomUsageID); // Get room by usage from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that have ${roomUsageID} usage.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with ${roomUsageID} usage.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByUsage = getRoomsByUsage;
const getRoomsByCapacity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomCapacity = parseInt(req.params.roomCapacity);
        if (isNaN(roomCapacity)) {
            throw new error400_1.Error400('capacity field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByCapacity(roomCapacity); // Get room by usage from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that have more than ${roomCapacity} person capacity.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with more than ${roomCapacity} person capacity.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("error");
        return next(err);
    }
});
exports.getRoomsByCapacity = getRoomsByCapacity;
//# sourceMappingURL=roomsControllers.js.map