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
exports.getFloorByID = void 0;
const MRBSService_1 = require("../../domain/servrices/MRBSService");
/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/
const getFloorByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const floor = yield (0, MRBSService_1.getMRBSFloorByID)(req.params.floorID);
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
// export const getFloorByID = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const floorID = req.params.floorID;
//         const URI = `https://mrbs.hmu.gr/api/pg/map/floor/${floorID}`
//         const encodedURI = encodeURI(URI);
//         const floor = await axios.get(encodedURI);   // Get All Rooms from DAO.
//         console.log("test: ", floor.data.features.length);
//         if (floor.data.features.length === 0) { throw new Error404(`Floor with id ${floorID} was not found.`, null) }
//         res.status(200).send({
//             found: true,
//             floor: floor.data
//         })
//     }
//     catch (err) {
//         console.log("ERROR")
//         return next(err)
//     }
// }
//# sourceMappingURL=floorControllers.js.map