const mongoose = require("mongoose");
require('dotenv').config();

//mongoose.connect(process.env.MONGO_URL);
mongoose.connect("mongodb://127.0.0.1:27017/reverse_prox_db");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", (err) => {
  console.log("Mongo DB Connection Failed");
});

module.exports = db;
