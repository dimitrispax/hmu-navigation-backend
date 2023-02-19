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
exports.connectionDAO = void 0;
const error500_1 = require("../../config/Errors/models/error500");
const connection_1 = require("../../config/db/connection");
class connectionDAO {
    /**************** *********************************************/
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
                response = yield connection_1.pool.query('SELECT ST_DistanceSphere(a.geopoint, b.geopoint) as Distance, is_edge_disabled_accessible ,a.id as starting_point, a.latitude as starting_point_lat, a.longitude as starting_point_lon,b.id as destination_point,b.latitude as destination_point_lat, b.longitude as destination_point_lon FROM point a, point b, connection WHERE a.id = starting_point AND b.id = destination_point');
                return response.rows;
            }
            catch (error) {
                throw (error);
            }
        });
    }
}
exports.connectionDAO = connectionDAO;
//# sourceMappingURL=connectionDAO.js.map