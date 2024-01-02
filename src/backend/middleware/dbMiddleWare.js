const { Todo } = require("../model/Todo");

const { convertToDate } = require("../middleware/dateObjectMiddleWare");
const CheckRedudancy = async (req, res, next) => {
  const { name, date } = req.body;
  const dateObject = convertToDate(date);
  const response = await Todo.find({ name: name, date: dateObject });
  if (response.length === 0) {
    next();
  } else {
    return res.status(400).json({ message: "Todo is already added" });
  }
};

const isTodoExist = async (req, res, next) => {
  const { name, date } = req.body;
  const dateObject = convertToDate(date);
  const response = await Todo.find({ name: name });
  if (response) {
    next();
  } else {
    return res
      .status(400)
      .json({ message: "Todo cannot be updated as it is not present" });
  }
};
module.exports = { CheckRedudancy, isTodoExist };
