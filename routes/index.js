const express = require("express");
const app = express();

const userRouter = require("./user");
const messageRouter = require("./message");

app.use("/users", userRouter);
app.use("/message", messageRouter);

module.exports = app;
