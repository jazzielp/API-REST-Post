const Joi = require('joi')

const id = Joi.string().min(24).max(24)
const username = Joi.string()
const name = Joi.string()
const password = Joi.string().min(3)
const email = Joi.string().email()
const role = Joi.string()

const createUserSchema = Joi.object({
  username: username.required(),
  name: name.required(),
  password: password.required(),
  email: email.required(),
  role
})

const updateUserSchema = Joi.object({
  username,
  name,
  role
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
}
