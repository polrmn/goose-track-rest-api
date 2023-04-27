const Joi = require("joi");

const addSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": `"title" should be a type of string`,
    "string.empty": `"title" must contain value`,
    "any.required": `"title" is a required field`,
  }),
  status: Joi.string().valid("toDo", "inProgress", "done"),
  priority: Joi.string().valid("low", "medium", "high"),
  date: Joi.object({
    start: Joi.date().iso().required().messages({
      "string.base": `"start" should be a type of string`,
      "string.empty": `"start" must contain value`,
      "any.required": `"start" is a required field`,
    }),
    end: Joi.date().iso().greater(Joi.ref("start")).required().messages({
      "string.base": `"end" should be a type of string`,
      "string.empty": `"end" must contain value`,
      "any.required": `"end" is a required field`,
    }),
  }),
});

const updateStatusSchema = Joi.object({
  status: Joi.string().valid("toDo", "inProgress", "done").required(),
});

const updatePrioritySchema = Joi.object({
  priority: Joi.string().valid("low", "medium", "high").required(),
});

module.exports = {
  addSchema,
  updateStatusSchema,
  updatePrioritySchema,
};
