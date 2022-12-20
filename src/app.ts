import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { httpErrorHandlerMiddleware } from './middlewares/httpErrorHandlerMiddleware';
import { Error404 } from './config/Errors/models/error404';

/* ROUTES */

import MRBSRoutes from "./presenter/routes/v1/MRBSRoutes";
import pointRoutes from './presenter/routes/v1/pointRoutes';
import connectionRoutes from './presenter/routes/v1/connectionRoutes';




const app = express();
const port = process.env.PORT || 3000;



/* Allowing CORS */
app.use(cors({ credentials: true }));

/* Parsing JSON */
app.use(express.json())



/* CONNECTION ROUTES */
app.use('/connections', connectionRoutes)

/* POINT ROUTES */
app.use('/points', pointRoutes)

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
