const mongoose = require("mongoose");
const dotenv = require("dotenv");

module.exports = function dbConnect() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to database"))
    .catch((error) => console.error("Couldn't connect to database"));
};
