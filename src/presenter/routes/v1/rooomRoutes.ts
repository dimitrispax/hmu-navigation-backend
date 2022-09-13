import express from 'express';
import { logRequestMiddleware } from "../../../middlewares/logRequestMiddleware";
import { getAllRooms, getRoomByID, getRoomsByCamera, getRoomsByCapacity, getRoomsByCapacityAndCameraAndProjector, getRoomsByDescription, getRoomsByFloor, getRoomsByManager, getRoomsByProjector, getRoomsByUsage, getRoomsByUsageAndCapacity, getRoomsByUsageAndCapacityAndCamera, getRoomsByUsageAndCapacityAndProjector, updateRoom } from "../../controllers/roomsControllers";
const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/

/* GET ALL ROOMS */
router.get('/all', logRequestMiddleware, getAllRooms);

/* GET ROOM BY ID */
router.get('/room/:roomID', logRequestMiddleware, getRoomByID);

/* GET ROOM BY DESCRIPTION */
router.get('/description/:roomDescription', logRequestMiddleware, getRoomsByDescription);

/* GET ROOM BY IF THEY CONTAIN CAMERA */
router.get('/camera/:roomCamera', logRequestMiddleware, getRoomsByCamera);

/* GET ROOM BY IF THEY CONTAIN PROJECTOR */
router.get('/projector/:roomProjector', logRequestMiddleware, getRoomsByProjector);

/* GET ROOM BY IF THEY CONTAIN MANAGER */
router.get('/manager/:roomManager', logRequestMiddleware, getRoomsByManager);

/* GET ROOM BY FLOOR */
router.get('/floor/:roomFloor', logRequestMiddleware, getRoomsByFloor);

/* GET ROOM BY USAGE */
router.get('/usageID/:roomUsageID', logRequestMiddleware, getRoomsByUsage);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS */
router.get('/have-capacity-of/:roomCapacity', logRequestMiddleware, getRoomsByCapacity);



/**************************************************************/
/********************* COMPLEX GET QUERIES ********************/
/**************************************************************/

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CAMERA AND PROJECTOR */
router.get('/have-capacity-of/:roomCapacity/have-camera/have-projector', logRequestMiddleware, getRoomsByCapacityAndCameraAndProjector);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS AND HAVE A CERTAIN USAGE */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity', logRequestMiddleware, getRoomsByUsageAndCapacity);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A CAMERA */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-camera', logRequestMiddleware, getRoomsByUsageAndCapacityAndCamera);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A PROJECTOR */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-projector', logRequestMiddleware, getRoomsByUsageAndCapacityAndProjector);



/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/

const bodyParser = require('body-parser').json();
router.patch('/update/:roomID', bodyParser, logRequestMiddleware, updateRoom)


export default router;  
