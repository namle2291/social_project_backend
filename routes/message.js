const express = require("express");
const router = express.Router();

const messageController = require("../controllers/messageController");

router.post("/send", messageController.send);

module.exports = router;
