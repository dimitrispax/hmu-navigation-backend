import express from 'express';
import { middleware } from "../../../middlewares/middleware";
import { getAllRooms, getRoomByID, getRoomsByCamera, getRoomsByCapacity, getRoomsByDescription, getRoomsByFloor, getRoomsByManager, getRoomsByProjector, getRoomsByUsage } from "../../controllers/roomsControllers";
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
router.get('/fit-more-than/:roomCapacity', middleware, getRoomsByCapacity);


export default router;  
