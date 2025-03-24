const express = require("express");
const router = express.Router();

const messageController = require("../controllers/messageController");

router.get("/get-message", messageController.getMessage);
router.post("/send", messageController.send);

module.exports = router;
