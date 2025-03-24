const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String },
  image: { type: String },
  created_at: { type: Date, default: Date.now },
  expires_at: {
    type: Date,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
});

const storyModal = mongoose.model("Story", StorySchema);
module.exports = storyModal;
