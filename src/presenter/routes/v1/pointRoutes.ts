import express from 'express';

import { getAllPoints } from "../../controllers/pointControllers";
const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/

/* GET ALL POINTS */
router.get('/all', getAllPoints);


export default router;  
