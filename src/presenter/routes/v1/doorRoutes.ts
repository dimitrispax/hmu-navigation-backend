import express from 'express';

import { getAllDoors } from "../../controllers/doorControllers";
const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/

/* GET ALL DOORS */
router.get('/all', getAllDoors);



export default router;  