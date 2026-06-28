const mongoose = require("mongoose");

async function connectDB() {
  try {
    const uri =
      process.env.MONGO_URI || "mongodb://localhost:27017/docker-challenge";
    await mongoose.connect(uri);
    console.log("💥 Mongo DB connected successfully 💥");
  } catch (error) {
    console.error("DB connection failed 😞");
    console.error(error.message);
  }
}

module.exports = connectDB;
