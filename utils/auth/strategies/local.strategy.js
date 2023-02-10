const { Strategy } = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const UserServices = require('../../../services/users.service')
const serviceUser = new UserServices()

const LocalStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await serviceUser.findByEmail(email)
    if (!user) {
      done(boom.unauthorized(), false)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      done(boom.unauthorized(), false)
    }
    done(null, user)
  } catch (error) {
    done(error, false)
  }
})
module.exports = LocalStrategy
