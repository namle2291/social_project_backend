const express = require("express");
const app = express();
const router = require("./routes");
const bodyParse = require("body-parser");

const userController = require("./controllers/userController");

const connectDB = require("./database/connect");
const port = 2209;

app.use(bodyParse.json());

connectDB();

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
