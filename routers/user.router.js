const express = require('express')
const router = express.Router()
const UserServices = require('../services/users.service')
const servicesUser = new UserServices()
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')
const validatorHandler = require('../middlewares/validator.handler')

// list users
router.get('/', (req, res, next) => {
  servicesUser.find()
    .then(resp => {
      res.status(200).json({
        message: 'success: Users found',
        data: resp
      })
    })
    .catch(err => {
      next(err)
    })
})

// find user by id
router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  (req, res, next) => {
    const { id } = req.params
    servicesUser.findOne(id)
      .then(resp => {
        res.status(200).json({
          message: 'success: User found',
          data: resp
        })
      })
      .catch(err => {
        next(err)
      })
  })

// Create user
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  (req, res, next) => {
    const data = req.body
    servicesUser.create(data)
      .then(resp => {
        delete resp.password
        res.status(201).json({
          message: 'Success : User created',
          data: resp
        })
      })
      .catch(err => {
        next(err)
      })
  })

// update user
router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  (req, res, next) => {
    const { id } = req.params
    const data = req.body
    servicesUser.update(id, data)
      .then(resp => {
        res.status(200).json({
          message: 'Success: user edited',
          data: resp
        })
      })
      .catch(err => {
        next(err)
      })
  })

// delete user
router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  (req, res, next) => {
    const { id } = req.params
    servicesUser.delete(id)
      .then(resp => {
        res.status(200).json({
          message: 'Success: User deleted',
          id
        })
      })
      .catch(err => {
        console.log(err)
      })
  })

module.exports = router
