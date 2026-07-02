const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const usersRoutes = require("./routes/users");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// 🛠️ תוקן שם המשתנה ל-allowedOrigins (עם d)
const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  process.env.RENDER_EXTERNAL_URL,
].filter(Boolean);

app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      // 🛠️ עכשיו המשתנה תואם לחלוטין למערך למעלה
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("not allowed by CORS policies"));
      }
    },
  }),
);

connectDB();

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is not defined in environment variables");
  process.exit(1);
}

app.get("/health", (req, res) => {
  // 🛠️ סידור המערך לפי האינדקסים הרשמיים של Mongoose (0=disconnected, 1=connected...)
  const dbStates = ["disconnected", "connected", "connecting", "disconnecting"];
  const dbconnected = mongoose.connection.readyState === 1;

  res.status(dbconnected ? 200 : 503).json({
    status: dbconnected ? "ok" : "error",
    db: dbStates[mongoose.connection.readyState],
    runtime: `${Math.floor(process.uptime())}s`, // 🛠️ הוספת סוגריים () לקריאה לפונקציה
    environment: process.env.NODE_ENV || "development",
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} 🚀`);
});
