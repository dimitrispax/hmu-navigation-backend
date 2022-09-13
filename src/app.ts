import express from 'express';
import cors from 'cors';
import { httpErrorHandlerMiddleware } from './middlewares/httpErrorHandlerMiddleware';

/* ROUTES */
import roomRoutes from "./presenter/routes/v1/rooomRoutes";


const app = express();
const port = process.env.PORT || 3000;

/* Allowing CORS */
app.use(cors({ credentials: true }));


/* ROOM ROUTES */
app.use('/rooms', roomRoutes)

/* ROOT ROUTE */
app.get('/', async (req, res) => {
  return res.status(200).json(
    { message: 'ROOT' })
})

/* ERROR HANDLER */
app.use(httpErrorHandlerMiddleware);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
