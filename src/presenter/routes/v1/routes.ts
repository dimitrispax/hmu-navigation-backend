import express from 'express';
import { middleware } from "../../../middlewares/middleware";
import { getAllRooms } from "../../controllers/controllers";
const router = express.Router();

/* INDEX ROUTE */
router.get('/', (req, res) => {
    res.send("INDEX");
})

/* GET ALL ROOMS */
router.get('/rooms', middleware, getAllRooms)


export default router;  
