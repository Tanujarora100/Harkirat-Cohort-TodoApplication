const router = require("express").Router();
const { CheckRedudancy, isTodoExist } = require("../middleware/dbMiddleWare");
const {
  addTodo,
  updateTodo,
  getTodos,
} = require("../controllers/Todo.controller");

router.get("/getTodos", getTodos);

router.post("/addTodo", CheckRedudancy, addTodo);
router.put("/updateTodo", isTodoExist, updateTodo); 



module.exports = router;
