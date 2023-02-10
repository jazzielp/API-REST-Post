const express = require('express')
const userRouter = require('./user.router')
const authRouter = require('./auth.router')

const routerApi = app => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/users', userRouter)
  router.use('/login', authRouter)
}

module.exports = routerApi
