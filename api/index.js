const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(express.json());

// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB".yellow);
  })
  .catch((err) => {
    console.log(`Error: ${err.message} `.red);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.blue);
});
