const router = require("express").Router();
const { CheckRedudancy, isTodoExist } = require("../middleware/dbMiddleWare");
const {
  addTodo,
  updateTodo,
  getTodos,
} = require("../controllers/Todo.controller");

const { inputValidator } = require("../middleware/inputValidationMiddleWare")

router.get("/getTodos", getTodos);

router.post("/addTodo", inputValidator, CheckRedudancy, addTodo);
router.put("/updateTodo", inputValidator, isTodoExist, updateTodo);

module.exports = router;
