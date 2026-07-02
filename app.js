const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const usersRoutes = require("./routes/users");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const alloweOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  process.env.RENDER_EXTERNAL_URL,
].filter(Boolean);

app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || alloweOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("not allowe by CORS policies"));
      }
    },
  }),
);

connectDB();

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET,is not defined in enviroment varaiables");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("wellcome to our users management app!!");
});

app.get("/health", (req, res) => {
  const dbStates = ["connected", "disconnected", "connecting", "disconnecting"];
  const dbconnected = mongoose.connection.readyState === 1;

  res.status(dbconnected ? 200 : 503).json({
    status: dbconnected ? "ok" : "error",
    db: dbStates[mongoose.connection.readyState],
    runtime: `${Math.floor(process.uptime)}s`,
    environment: process.env.NODE_ENV || "development",
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} 🚀`);
});
