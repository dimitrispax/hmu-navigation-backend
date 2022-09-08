import express from 'express';
import { middleware } from "../../../middlewares/middleware";
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
router.get('/all', middleware, getAllRooms);

/* GET ROOM BY ID */
router.get('/room/:roomID', middleware, getRoomByID);

/* GET ROOM BY DESCRIPTION */
router.get('/description/:roomDescription', middleware, getRoomsByDescription);

/* GET ROOM BY IF THEY CONTAIN CAMERA */
router.get('/camera/:roomCamera', middleware, getRoomsByCamera);

/* GET ROOM BY IF THEY CONTAIN PROJECTOR */
router.get('/projector/:roomProjector', middleware, getRoomsByProjector);

/* GET ROOM BY IF THEY CONTAIN MANAGER */
router.get('/manager/:roomManager', middleware, getRoomsByManager);

/* GET ROOM BY FLOOR */
router.get('/floor/:roomFloor', middleware, getRoomsByFloor);

/* GET ROOM BY USAGE */
router.get('/usageID/:roomUsageID', middleware, getRoomsByUsage);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS */
router.get('/have-capacity-of/:roomCapacity', middleware, getRoomsByCapacity);



/**************************************************************/
/********************* COMPLEX GET QUERIES ********************/
/**************************************************************/

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CAMERA AND PROJECTOR */
router.get('/have-capacity-of/:roomCapacity/have-camera/have-projector', middleware, getRoomsByCapacityAndCameraAndProjector);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS AND HAVE A CERTAIN USAGE */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity', middleware, getRoomsByUsageAndCapacity);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A CAMERA */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-camera', middleware, getRoomsByUsageAndCapacityAndCamera);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A PROJECTOR */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-projector', middleware, getRoomsByUsageAndCapacityAndProjector);



/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/

const bodyParser = require('body-parser').json();
router.patch('/update/:roomID', bodyParser, updateRoom)


export default router;  
