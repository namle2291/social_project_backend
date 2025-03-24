const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "default.png" },
  created_at: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, saltRounds);
});

UserSchema.method("checkPassword", async function (password) {
  return await bcrypt.compare(password, this.password);
});

const userModal = mongoose.model("User", UserSchema);
module.exports = userModal;
