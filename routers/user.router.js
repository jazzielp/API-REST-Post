const express = require('express')
const router = express.Router()
const UserServices = require('../services/users.service')
const servicesUser = new UserServices()
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')
const validatorHandler = require('../middlewares/validator.handler')

// Ver el listado de los usuario
router.get('/', (req, res, next) => {
  servicesUser.find()
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      next(err)
    })
})

// Buscar un usuario
router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  (req, res, next) => {
    const { id } = req.params
    console.log('entra')
    servicesUser.findOne(id)
      .then(resp => {
        res.json({
          message: resp,
          id
        })
      })
      .catch(err => {
        next(err)
      })
  })

// Crear un usuario
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  (req, res, next) => {
    const data = req.body
    servicesUser.create(data)
      .then(resp => {
        res.json({
          message: resp,
          data
        })
      })
      .catch(err => {
        next(err)
      })
  })

// Editar un usuario
router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  (req, res, next) => {
    const { id } = req.params
    const data = req.body
    servicesUser.update(id, data)
      .then(resp => {
        res.json({
          message: 'Usuario editado',
          id,
          data
        })
      })
      .catch(err => {
        next(err)
      })
  })

// Eliminar usuario
router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  (req, res, next) => {
    const { id } = req.params
    servicesUser.delete(id)
      .then(resp => {
        res.json({
          message: resp,
          id
        })
      })
      .catch(err => {
        console.log(err)
      })
  })

module.exports = router
