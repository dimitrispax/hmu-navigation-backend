"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomsControllers_1 = require("../../controllers/roomsControllers");
const router = express_1.default.Router();
/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
});
/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/
/* GET ALL ROOMS */
router.get('/all', roomsControllers_1.getAllRooms);
/* GET ROOM BY ID */
router.get('/room/:roomID', roomsControllers_1.getRoomByID);
/* GET ROOM BY DESCRIPTION */
router.get('/description/:roomDescription', roomsControllers_1.getRoomsByDescription);
/* GET ROOM BY IF THEY CONTAIN CAMERA */
router.get('/camera/:roomCamera', roomsControllers_1.getRoomsByCamera);
/* GET ROOM BY IF THEY CONTAIN PROJECTOR */
router.get('/projector/:roomProjector', roomsControllers_1.getRoomsByProjector);
/* GET ROOM BY IF THEY CONTAIN MANAGER */
router.get('/manager/:roomManager', roomsControllers_1.getRoomsByManager);
/* GET ROOM BY FLOOR */
router.get('/floor/:roomFloor', roomsControllers_1.getRoomsByFloor);
/* GET ROOM BY USAGE */
router.get('/usageID/:roomUsageID', roomsControllers_1.getRoomsByUsage);
/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS */
router.get('/have-capacity-of/:roomCapacity', roomsControllers_1.getRoomsByCapacity);
/**************************************************************/
/********************* COMPLEX GET QUERIES ********************/
/**************************************************************/
/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CAMERA AND PROJECTOR */
router.get('/have-capacity-of/:roomCapacity/have-camera/have-projector', roomsControllers_1.getRoomsByCapacityAndCameraAndProjector);
/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS AND HAVE A CERTAIN USAGE */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity', roomsControllers_1.getRoomsByUsageAndCapacity);
/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A CAMERA */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-camera', roomsControllers_1.getRoomsByUsageAndCapacityAndCamera);
/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A PROJECTOR */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-projector', roomsControllers_1.getRoomsByUsageAndCapacityAndProjector);
/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/
router.patch('/update/:roomID', roomsControllers_1.updateRoom);
exports.default = router;
//# sourceMappingURL=rooomRoutes.js.map