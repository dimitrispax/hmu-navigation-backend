"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pointControllers_1 = require("../../controllers/pointControllers");
const router = express_1.default.Router();
/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
});
/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/
/* GET ALL POINTS */
router.get('/all', pointControllers_1.getAllPoints);
exports.default = router;
//# sourceMappingURL=pointRoutes.js.map