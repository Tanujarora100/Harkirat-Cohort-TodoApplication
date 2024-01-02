const { Todo } = require("../model/Todo");
const moment = require("moment");
const DATEFORMAT = "YYYY-MM-DD";
const addTodo = async (req, res) => {
  try {
    const { name, date } = req.body;
    const dateObject = moment(date, DATEFORMAT);

    const createdTodo = await Todo.create({ name: name, date: dateObject });
    return res.status(201).json(createdTodo);
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal Server Error");
  }
};

const updateTodo = async (req, res) => {
  try {
    const { name, date } = req.body;
    const updateQuery = { name: name };
    if (date) {
      const dateObject = moment(date, DATEFORMAT);
      updateQuery.$set = { date: dateObject };
    }
    const updatedTodo = await Todo.updateOne(updateQuery);
    const message =
      updatedTodo.modifiedCount === 0
        ? "Todo Already Updated"
        : "Updated Successfully";
    return res.status(200).json({ message });
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal Server Error");
  }
};

const getTodos = async (req, res) => {
  try {
    const todoList = await Todo.find({});
    return res.status(200).json(todoList);
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal Server Error");
  }
};
module.exports = { addTodo, updateTodo, getTodos };
