import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

//routers

import roomRoutes from "./presenter/routes/v1/rooomRoutes";

/* ROUTES */
app.use('/rooms', roomRoutes)

/* ROOT ROUTE */
app.get('/', async (req, res) => {
  return res.status(200).json(
    { message: 'ROOT' })
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
