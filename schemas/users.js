const Joi = require('joi');

const emailRegexp = /^\S+@\S+\.\S+$/; //<----------
const registerSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required()
});

module.exports = {
    registerSchema,
    loginSchema
}