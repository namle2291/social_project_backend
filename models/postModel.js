const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String },
  image: { type: String },
  created_at: { type: Date, default: Date.now },
});

const postModal = mongoose.model("Post", PostSchema);
module.exports = postModal;
