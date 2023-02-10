const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

router.post('/',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const payload = {
        id: user.id,
        role: user.role
      }
      const token = jwt.sign(payload, config.jwtSecret)
      res.status(200).json({
        message: 'success',
        data: {
          user,
          token
        }
      })
    } catch (error) {
      next(error)
    }
  })

module.exports = router
