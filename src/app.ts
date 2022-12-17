import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { httpErrorHandlerMiddleware } from './middlewares/httpErrorHandlerMiddleware';
import { Error404 } from './config/Errors/models/error404';

/* ROUTES */
import roomRoutes from "./presenter/routes/v1/rooomRoutes";
import MRBSRoutes from "./presenter/routes/v1/MRBSRoutes";
import doorRoutes from './presenter/routes/v1/doorRoutes';
import buildingRoutes from './presenter/routes/v1/buildingRoutes';



const app = express();
const port = process.env.PORT || 3000;



/* Allowing CORS */
app.use(cors({ credentials: true }));

/* Parsing JSON */
app.use(express.json())

/* ROOM ROUTES */
app.use('/rooms', roomRoutes)

/* DOOR ROUTES */
app.use('/doors', doorRoutes)

/* BUILDING ROUTES */
app.use('/buildings', buildingRoutes)

/* MRBS ROUTES */
app.use('/mrbs', MRBSRoutes)

/* ROOT ROUTE */
app.get('/', async (req, res) => {
  return res.status(200).json(
    { message: 'ROOT' })
})

/* UNKWOWN PATH HANDLER */
app.use((req: Request, res: Response, next: NextFunction) => { next(new Error404(`Route ${req.path} not found.`, null)) })

/* ERROR HANDLER */
app.use(httpErrorHandlerMiddleware);


/* SERVER START */
app.listen(port, () => {
  return console.log(`Server is running at http://localhost:${port}`);
});
