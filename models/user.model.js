const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: String,
  name: String,
  password: String,
  email: String
})

userSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
    delete returnObject.__v
  }
})

const User = model('User', userSchema)
module.exports = User
