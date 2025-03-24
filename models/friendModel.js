const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  user_id_1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user_id_2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "declined"],
    default: "pending",
  },
  created_at: { type: Date, default: Date.now },
});

const friendModal = mongoose.model("Friend", FriendSchema);
module.exports = friendModal;
