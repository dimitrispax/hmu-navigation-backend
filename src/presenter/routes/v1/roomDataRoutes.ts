import express from 'express';

import { getAllRoomData } from '../../controllers/roomDataControllers';

const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/



router.get('/all', getAllRoomData);


export default router;  
