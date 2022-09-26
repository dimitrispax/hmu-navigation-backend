"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MRBSControllers_1 = require("../../controllers/MRBSControllers");
const router = express_1.default.Router();
/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
});
/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/
/* GET ALL ROOMS OF A FLOOR */
router.get('/floor/:floorID', MRBSControllers_1.getFloorByID);
/* GET ALL DOORS OF A ROOM */
router.get('/doors-of-room/:roomID', MRBSControllers_1.getDoorsByID);
/* GET BUILDING */
router.get('/building/:buildingID', MRBSControllers_1.getBuildingByID);
exports.default = router;
//# sourceMappingURL=MRBSRoutes.js.map