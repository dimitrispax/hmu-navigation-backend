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
exports.getBuildingByID = exports.getDoorsByID = exports.getFloorByID = void 0;
const error404_1 = require("../../config/Errors/models/error404");
const MRBSService_1 = require("../../domain/servrices/MRBSService");
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getFloorByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const floor = yield (0, MRBSService_1.getMRBSFloorByID)(req.params.floorID);
        if (floor.features.length === 0) {
            throw new error404_1.Error404(`Floor with id ${req.params.floorID} was not found.`, null);
        }
        res.status(200).send({
            found: true,
            floor: floor
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getFloorByID = getFloorByID;
const getDoorsByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doors = yield (0, MRBSService_1.getMRBSDoorsByID)(req.params.roomID);
        if (doors.length === 0) {
            throw new error404_1.Error404(`Room with id ${req.params.roomID} was not found.`, null);
        }
        res.status(200).send({
            found: true,
            doors: doors
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getDoorsByID = getDoorsByID;
const getBuildingByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const building = yield (0, MRBSService_1.getMRBSBuildingByID)(req.params.buildingID);
        if (building.features.length === 0) {
            throw new error404_1.Error404(`Building with id ${req.params.buildingID} was not found.`, null);
        }
        res.status(200).send({
            found: true,
            building: building
        });
    }
    catch (err) {
        console.log("ERROR");
        return next(err);
    }
});
exports.getBuildingByID = getBuildingByID;
//# sourceMappingURL=MRBSControllers.js.map