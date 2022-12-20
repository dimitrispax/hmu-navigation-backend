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
const error500_1 = require("../../config/Errors/models/error500");
const connection_1 = require("../../config/db/connection");
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
                response = yield connection_1.pool.query(`SELECT 'Feature' as type,r.id as id, ST_AsGeoJSON(ST_Transform(ST_SetSRID(r.geom, 2100), 4326))::json as geometry, json_build_object('feat_type', 'line','feat_area', ST_Area(r.geom)) as properties
            FROM room r join building b on b.id = split_part(r."floorId",'.',1) left join mtrans t on t.target = 'osm' and t.id=split_part(r."floorId",'.',1)`);
                return response.rows;
            }
            catch (error) {
                throw (error);
            }
        });
    }
}
exports.roomDAO = roomDAO;
//# sourceMappingURL=roomDAO.js.map