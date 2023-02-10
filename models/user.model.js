const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  name: String,
  password: String,
  role: {
    type: String,
    default: 'user'
  }
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
