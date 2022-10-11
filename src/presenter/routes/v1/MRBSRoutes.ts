import express from 'express';

import { getAllMRBSData } from '../../controllers/MRBSControllers';

const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/



router.get('/api/all', getAllMRBSData);


export default router;  
