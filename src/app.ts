import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

//routers
const router = require("./routes/routes");

app.get('/', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
