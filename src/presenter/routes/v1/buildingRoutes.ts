import express from 'express';
import { getAllBuildings } from '../../controllers/buildingControllers';


const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/**************************************************************/
/**************************** GET *****************************/
/**************************************************************/

/* GET ALL BUILDINGS */
router.get('/all', getAllBuildings);



export default router;  