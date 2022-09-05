"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middlewares/middleware");
const controllers_1 = require("../../controllers/controllers");
const router = express_1.default.Router();
/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
});
router.get('/rooms', middleware_1.middleware, controllers_1.getAllRooms);
exports.default = router;
//# sourceMappingURL=routes.js.map