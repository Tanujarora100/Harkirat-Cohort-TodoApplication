const { z } = require("zod");

const { z } = require("zod");

const isValidDateString = (value) => {
  
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
};

const Schema = z.object({
  name: z.string(),
  date: z.string().refine(isValidDateString, {
    message: "Invalid date string format. Use 'YYYY-MM-DD'.",
  }),
  description: z.string(),
});

const inputValidator = (req, res, next) => {
  try {
    const { name, date,description } = req.body;
    const response = Schema.safeParse({ name, date,description });
    if (response.success) next();
    else {
      return res.status(400).json({ message: "Invalid request format" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Validation failed", details: error.errors });
  }
};
module.exports = { inputValidator };
