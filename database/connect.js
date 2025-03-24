const mongoose = require("mongoose");

async function main() {
  console.log("connect db");
  await mongoose.connect("mongodb://localhost:27017/social");
}

module.exports = main;
