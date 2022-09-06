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
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemeted", null); });
    }
    ;
    update(id, model) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemeted", null); });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemeted", null); });
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
}
exports.roomDAO = roomDAO;
//# sourceMappingURL=roomDAO.js.map