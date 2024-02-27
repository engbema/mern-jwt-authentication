const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB".yellow);
  })
  .catch((err) => {
    console.log(`Error: ${err.message} `.red);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.blue);
});
