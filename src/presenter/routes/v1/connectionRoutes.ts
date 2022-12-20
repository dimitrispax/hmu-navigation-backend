import express from 'express';

import { getAllConnections } from "../../controllers/connectionControllers";
const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/

/* GET ALL CONNECTIONS */
router.get('/all', getAllConnections);


export default router;  
