const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(
      process.env.DB_URI || "mongodb://localhost:27017/dockerChallengeDB",
    );
    console.log("💥 Mongo DB connect successfully 💥");
  } catch (error) {
    console.error("Data DB connection failed 😢");
    console.error("The actual error is:", error.message);
  }
}
module.exports = connectDB;
