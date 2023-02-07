// Archivo donde estan los servicios que se conectan a la base de datos
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

class UserServices {
  async find () {
    const users = await User.find({}, {
      username: 1,
      name: 1
    })
    return users
  }

  async findOne (id) {
    const user = await User.findById(id, {
      username: 1,
      name: 1
    })
    return user
  }

  async create (data) {
    const { username, name, password, email } = data
    const passwordHash = await bcrypt.hash(password, 10)
    const user = User({
      username,
      name,
      password: passwordHash,
      email
    })
    const newUser = await user.save()
    return {
      username: newUser.username,
      name: newUser.name,
      id: newUser._id
    }
  }

  async update (id, data) {
    const updateUser = await User.findByIdAndUpdate(id, data, { new: true })
    return updateUser
  }

  async delete (id) {
    const user = await User.findByIdAndRemove(id)
    return user
  }
}

module.exports = UserServices
