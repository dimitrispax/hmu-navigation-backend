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
exports.buildingDAO = void 0;
const error500_1 = require("../../config/Errors/models/error500");
const connection_1 = require("../../db/connection");
class buildingDAO {
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
    update(id, model) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () { throw new error500_1.Error500("Not implemented", null); });
    }
    ;
    /**************************************************************/
    /**************************** READ ****************************/
    /**************************************************************/
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield connection_1.pool.query(`SELECT 'Feature' as type, b.id as id, ST_AsGeoJSON(st_transform(b.geom,4326))::json as geometry, json_build_object('feat_type', 'point') as properties FROM building b`);
                return response.rows;
            }
            catch (error) {
                throw (error);
            }
        });
    }
}
exports.buildingDAO = buildingDAO;
//# sourceMappingURL=buildingDAO.js.map