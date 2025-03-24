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
  const myPlaintextPassword = this.password;
  this.password = await bcrypt.hash(myPlaintextPassword, saltRounds);
});

const userModal = mongoose.model("User", UserSchema);
module.exports = userModal;
