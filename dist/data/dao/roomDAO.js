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
exports.roomDAO = void 0;
const client_1 = require("@prisma/client");
const error500_1 = require("../../config/Errors/models/error500");
const prisma = new client_1.PrismaClient();
class roomDAO {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    create(model) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    /* Get all rooms */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany();
        });
    }
    /* Get room by ID */
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findUnique({ where: { id: id } });
        });
    }
    /* Get room by description */
    getRoomsByDescription(description) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { description: description } });
        });
    }
    /* Get rooms by usage */
    getRoomsByUsage(usageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { usageId: usageId } });
        });
    }
    /* Get rooms by manager */
    getRoomsByManager(manager) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { manager: manager } });
        });
    }
    /* Get rooms by camera */
    getRoomsByCamera(camera) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { camera: camera } });
        });
    }
    /* Get rooms by projector */
    getRoomsByProjector(projector) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { projector: projector } });
        });
    }
    /* Get rooms by usage */
    getRoomsByFloor(floorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { floorId: floorId } });
        });
    }
    /* Get rooms by capacity */
    getRoomsByCapacity(capacity) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { capacity: { gte: capacity } } });
        });
    }
    /* Get rooms with certain usage and fit more than an amount of persons(capacity) */
    getRoomsByUsageAndCapacity(usageId, capacity) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { capacity: { gte: capacity }, usageId: usageId } });
        });
    }
    /* Get rooms with certain usage and fit more than an amount of persons(capacity) as well if the room has a camera */
    getRoomsByUsageAndCapacityAndCamera(usageId, capacity) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { capacity: { gte: capacity }, usageId: usageId, camera: 1 } });
        });
    }
    /* Get rooms with certain usage and fit more than an amount of persons(capacity) as well if the room has a projector */
    getRoomsByUsageAndCapacityAndProjector(usageId, capacity) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { capacity: { gte: capacity }, usageId: usageId, projector: 1 } });
        });
    }
    /* Get rooms that fit more than an amount of persons(capacity) and they have camera and projector*/
    getRoomsByCapacityAndCameraAndProjector(capacity) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.findMany({ where: { capacity: { gte: capacity }, camera: 1, projector: 1 } });
        });
    }
    /**************************************************************/
    /*************************** UPDATE ***************************/
    /**************************************************************/
    update(roomID, model) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.room.update({
                where: { id: roomID },
                data: {
                    description: model === null || model === void 0 ? void 0 : model.description,
                    usageId: model === null || model === void 0 ? void 0 : model.usageId,
                    manager: model === null || model === void 0 ? void 0 : model.manager,
                    computer: model === null || model === void 0 ? void 0 : model.computer,
                    camera: model === null || model === void 0 ? void 0 : model.camera,
                    projector: model === null || model === void 0 ? void 0 : model.projector,
                    capacity: model === null || model === void 0 ? void 0 : model.capacity,
                }
            });
        });
    }
}
exports.roomDAO = roomDAO;
//# sourceMappingURL=roomDAO.js.map