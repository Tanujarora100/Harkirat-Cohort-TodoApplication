const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;

const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file");
  return;
}

const dbConnect = require("../backend/database/dbConfig");
dbConnect();

app.use(express.json());



const router = require("../backend/routes/TodoRoute");
const { unAuthorizedRouter } = require("../backend/routes/UnauthorizedRoute");
app.use("/todos", router);
app.use("*", unAuthorizedRouter);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
