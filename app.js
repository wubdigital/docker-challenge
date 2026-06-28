const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const usersRoutes = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

connectDB();

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} 🚀`);
});
