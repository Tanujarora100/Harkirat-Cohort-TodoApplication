const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("../backend/database/dbConfig");
app.use(express.json());
const router = require("../backend/routes/TodoRoute");
dbConnect();
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.use("/todos", router);


app.use('*',(req,res)=>
{
    return res.status(404).json({message:"404 Not Found"});
})
