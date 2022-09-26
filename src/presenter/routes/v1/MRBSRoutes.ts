import express from 'express';

import { getFloorByID, getDoorsByID, getBuildingByID } from "../../controllers/MRBSControllers";
const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/

/* GET ALL ROOMS OF A FLOOR */
router.get('/floor/:floorID', getFloorByID);

/* GET ALL DOORS OF A ROOM */
router.get('/doors-of-room/:roomID', getDoorsByID);

/* GET BUILDING */
router.get('/building/:buildingID', getBuildingByID);



export default router;  
