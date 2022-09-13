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
exports.updateRoom = exports.getRoomsByUsageAndCapacityAndProjector = exports.getRoomsByUsageAndCapacityAndCamera = exports.getRoomsByUsageAndCapacity = exports.getRoomsByCapacityAndCameraAndProjector = exports.getRoomsByCapacity = exports.getRoomsByUsage = exports.getRoomsByFloor = exports.getRoomsByManager = exports.getRoomsByProjector = exports.getRoomsByCamera = exports.getRoomsByDescription = exports.getRoomByID = exports.getAllRooms = void 0;
const error400_1 = require("../../config/Errors/models/error400");
const error404_1 = require("../../config/Errors/models/error404");
const roomDAO_1 = require("../../data/dao/roomDAO");
const roomDTO_1 = __importDefault(require("../../domain/dto/roomDTO"));
const dtoMapper_1 = __importDefault(require("../../domain/utillities/dtoMapper"));
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getAllRooms = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const allRooms = yield roomsDAOCalls.getAll(); // Get All Rooms from DAO.
        const DTORooms = allRooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: 'All rooms',
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("ERROR");
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
        const DTORoom = (0, dtoMapper_1.default)(room, new roomDTO_1.default()); // Transforming objects with DTO.
        res.status(200).json({
            found: true,
            room: DTORoom
        });
    }
    catch (err) {
        console.log("ERROR");
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
        console.log("ERROR");
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
        console.log("ERROR");
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
        console.log("ERROR");
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
        console.log("ERROR");
        return next(err);
    }
});
exports.getRoomsByManager = getRoomsByManager;
const getRoomsByFloor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomFloor = req.params.roomFloor;
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
        console.log("ERROR");
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
        console.log("ERROR");
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
            message: `Rooms with capacity for ${roomCapacity} persons.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getRoomsByCapacity = getRoomsByCapacity;
/**************************************************************/
/********************* COMPLEX GET QUERIES ********************/
/**************************************************************/
const getRoomsByCapacityAndCameraAndProjector = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomCapacity = parseInt(req.params.roomCapacity);
        if (isNaN(roomCapacity)) {
            throw new error400_1.Error400('capacity field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByCapacityAndCameraAndProjector(roomCapacity); // Get room by usage from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that have more than ${roomCapacity} person capacity that have a camera and a projector.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with capacity for ${roomCapacity} persons that have a camera and a projector.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getRoomsByCapacityAndCameraAndProjector = getRoomsByCapacityAndCameraAndProjector;
const getRoomsByUsageAndCapacity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomUsageID = parseInt(req.params.roomUsageID);
        const roomCapacity = parseInt(req.params.roomCapacity);
        if (isNaN(roomUsageID)) {
            throw new error400_1.Error400('usageId field must be a number', null);
        }
        if (isNaN(roomCapacity)) {
            throw new error400_1.Error400('capacity field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByUsageAndCapacity(roomUsageID, roomCapacity); // Get room by usage from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that have ${roomUsageID} usage and fit more than ${roomCapacity} persons.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with ${roomUsageID} usage and capacity for ${roomCapacity} persons.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getRoomsByUsageAndCapacity = getRoomsByUsageAndCapacity;
const getRoomsByUsageAndCapacityAndCamera = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomUsageID = parseInt(req.params.roomUsageID);
        const roomCapacity = parseInt(req.params.roomCapacity);
        if (isNaN(roomUsageID)) {
            throw new error400_1.Error400('usageId field must be a number', null);
        }
        if (isNaN(roomCapacity)) {
            throw new error400_1.Error400('capacity field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByUsageAndCapacityAndCamera(roomUsageID, roomCapacity); // Get room by usage from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that have ${roomUsageID} usage that fit more than ${roomCapacity} persons and have a camera.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with ${roomUsageID} usage and capacity for ${roomCapacity} persons that have a camera.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getRoomsByUsageAndCapacityAndCamera = getRoomsByUsageAndCapacityAndCamera;
const getRoomsByUsageAndCapacityAndProjector = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomUsageID = parseInt(req.params.roomUsageID);
        const roomCapacity = parseInt(req.params.roomCapacity);
        if (isNaN(roomUsageID)) {
            throw new error400_1.Error400('usageId field must be a number', null);
        }
        if (isNaN(roomCapacity)) {
            throw new error400_1.Error400('capacity field must be a number', null);
        }
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const rooms = yield roomsDAOCalls.getRoomsByUsageAndCapacityAndProjector(roomUsageID, roomCapacity); // Get room by usage from DAO.
        if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) === 0) {
            throw new error404_1.Error404(`There are not rooms that have ${roomUsageID} usage that fit more than ${roomCapacity} persons and have a projector.`, null);
        }
        const DTORooms = rooms.map((room) => (0, dtoMapper_1.default)(room, new roomDTO_1.default())); // Transforming objects with DTO.
        res.status(200).json({
            message: `Rooms with ${roomUsageID} usage and capacity for ${roomCapacity} persons that have a projector.`,
            count: DTORooms.length,
            rooms: DTORooms
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getRoomsByUsageAndCapacityAndProjector = getRoomsByUsageAndCapacityAndProjector;
/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/
const updateRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomID = req.params.roomID;
        console.log("BUT MY BODY IS TELLING ME: ", req.body);
        const { description, usageId, manager, computer, camera, projector, capacity } = req.body;
        /* Handling if user leaves an input field empty */
        if (!description) {
            throw new error400_1.Error400("No 'description' given.", null);
        }
        if (!manager) {
            throw new error400_1.Error400("No 'manager' given.", null);
        }
        if (!usageId) {
            throw new error400_1.Error400("No 'usageId' given.", null);
        }
        if (!capacity) {
            throw new error400_1.Error400("No 'capacity' given.", null);
        }
        /* Handling if user gives wrong input */
        if (isNaN(usageId)) {
            throw new error400_1.Error400('UsageID must be a number.', null);
        }
        if (isNaN(capacity)) {
            throw new error400_1.Error400('Capacity must be a number.', null);
        }
        if (computer !== 0 && computer !== 1) {
            throw new error400_1.Error400('Computer must be a boolean (0 or 1).', null);
        }
        if (camera !== 0 && computer !== 1) {
            throw new error400_1.Error400('Camera must be a boolean (0 or 1).', null);
        }
        if (projector !== 0 && projector !== 1) {
            throw new error400_1.Error400('Projector must be a boolean (0 or 1).', null);
        }
        /* Checking if the user given exists */
        const roomsDAOCalls = new roomDAO_1.roomDAO(); // Calling DAO.
        const room = yield roomsDAOCalls.getById(roomID); // Get room by usage from DAO
        if (!room) {
            throw new error404_1.Error404(`Room with id ${roomID} does not exist`, null);
        }
        /* Updating room data */
        const updatedRoom = yield roomsDAOCalls.update(roomID, { description, usageId, manager, computer, camera, projector, capacity });
        const DTORoom = (0, dtoMapper_1.default)(room, new roomDTO_1.default()); // Transforming object with DTO.
        res.status(201).json({
            message: `Room with id ${roomID} was updated.`,
            room: DTORoom
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.updateRoom = updateRoom;
//# sourceMappingURL=roomsControllers.js.map