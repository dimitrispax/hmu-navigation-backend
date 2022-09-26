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
exports.getMRBSBuildingByID = exports.getMRBSDoorsByID = exports.getMRBSFloorByID = void 0;
const axios_1 = __importDefault(require("axios"));
const getMRBSFloorByID = (floorID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URI = `https://mrbs.hmu.gr/api/pg/map/floor/${floorID}`;
        const encodedURI = encodeURI(URI);
        const response = yield axios_1.default.get(encodedURI);
        return response.data;
    }
    catch (err) {
        console.log("ERROR");
    }
    return null;
});
exports.getMRBSFloorByID = getMRBSFloorByID;
const getMRBSDoorsByID = (roomID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URI = `https://mrbs.hmu.gr/api/pg/door/${roomID}`;
        const encodedURI = encodeURI(URI);
        const response = yield axios_1.default.get(encodedURI);
        return response.data;
    }
    catch (err) {
        console.log("ERROR");
    }
    return null;
});
exports.getMRBSDoorsByID = getMRBSDoorsByID;
const getMRBSBuildingByID = (buildingID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URI = `https://mrbs.hmu.gr/api/pg/map/border/${buildingID}`;
        const encodedURI = encodeURI(URI);
        const response = yield axios_1.default.get(encodedURI);
        return response.data;
    }
    catch (err) {
        console.log("ERROR");
    }
    return null;
});
exports.getMRBSBuildingByID = getMRBSBuildingByID;
//# sourceMappingURL=MRBSService.js.map