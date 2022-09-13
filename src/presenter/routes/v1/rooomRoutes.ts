import express from 'express';

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
router.get('/all', getAllRooms);

/* GET ROOM BY ID */
router.get('/room/:roomID', getRoomByID);

/* GET ROOM BY DESCRIPTION */
router.get('/description/:roomDescription', getRoomsByDescription);

/* GET ROOM BY IF THEY CONTAIN CAMERA */
router.get('/camera/:roomCamera', getRoomsByCamera);

/* GET ROOM BY IF THEY CONTAIN PROJECTOR */
router.get('/projector/:roomProjector', getRoomsByProjector);

/* GET ROOM BY IF THEY CONTAIN MANAGER */
router.get('/manager/:roomManager', getRoomsByManager);

/* GET ROOM BY FLOOR */
router.get('/floor/:roomFloor', getRoomsByFloor);

/* GET ROOM BY USAGE */
router.get('/usageID/:roomUsageID', getRoomsByUsage);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS */
router.get('/have-capacity-of/:roomCapacity', getRoomsByCapacity);



/**************************************************************/
/********************* COMPLEX GET QUERIES ********************/
/**************************************************************/

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CAMERA AND PROJECTOR */
router.get('/have-capacity-of/:roomCapacity/have-camera/have-projector', getRoomsByCapacityAndCameraAndProjector);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS AND HAVE A CERTAIN USAGE */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity', getRoomsByUsageAndCapacity);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A CAMERA */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-camera', getRoomsByUsageAndCapacityAndCamera);

/* GET ROOM BY IF THEY HAVE CAPACITY FOR CERTAIN AMOUNT OF PERSONS, HAVE A CERTAIN USAGE, HAVE A PROJECTOR */
router.get('/usageID/:roomUsageID/have-capacity-of/:roomCapacity/have-projector', getRoomsByUsageAndCapacityAndProjector);



/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/

const bodyParser = require('body-parser').json();
router.patch('/update/:roomID', bodyParser, updateRoom)


export default router;  
