const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const messageModal = mongoose.model("Message", MessageSchema);
module.exports = messageModal;
