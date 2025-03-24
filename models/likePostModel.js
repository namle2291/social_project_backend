const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  created_at: { type: Date, default: Date.now },
});

const likePostModal = mongoose.model("Like", LikeSchema);
module.exports = likePostModal;
