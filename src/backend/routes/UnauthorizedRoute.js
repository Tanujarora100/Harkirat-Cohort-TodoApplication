const router = require("express").Router();
const unAuthorizedRouter = (req, res) => {
  return res.status(404).json({ message: "Invalid route" });
};

module.exports = { unAuthorizedRouter };
