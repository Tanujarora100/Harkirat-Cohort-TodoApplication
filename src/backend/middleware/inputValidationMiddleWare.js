const { z } = require("zod");

const Schema = z.object({
  name: z.string(),
  date: z.string(),
});
const inputValidator = (req, res, next) => {
  try {
    const { name, date } = req.body;
    const response=Schema.safeParse({ name, date });
    if(response.success)
        next();
    else{
        return res.status(400).json({message:"Invalid request format"})
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Validation failed", details: error.errors });
  }
};
module.exports = { inputValidator };
