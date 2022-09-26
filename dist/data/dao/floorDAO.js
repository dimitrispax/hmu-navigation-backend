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
exports.floorDAO = void 0;
const error500_1 = require("../../config/Errors/models/error500");
// import fetch from 'node-fetch';
class floorDAO {
    /**************************************************************/
    /************************* NOT IN USE *************************/
    /**************************************************************/
    getAll() {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    create(model) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    update(id, model) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    /* Get all rooms */
    getAlls() {
        return __awaiter(this, void 0, void 0, function* () {
            const floor = yield fetch(`https://mrbs.hmu.gr/api/pg/map/floor/%CE%9A14.0`);
            console.log(floor);
            return floor;
            // /* Get room by ID */
            // async getById(id: string): Promise<Floor | null> {
            //     return prisma.room.findUnique({ where: { id: id } })
            // }
        });
    }
}
exports.floorDAO = floorDAO;
//# sourceMappingURL=floorDAO.js.map