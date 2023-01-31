const express = require('express')
const router = express.Router()
const UserServices = require('../services/users.service')
const servicesUser = new UserServices()

// Ver el listado de los usuario
router.get('/', (req, res, next) => {
  servicesUser.find()
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      console.log(err)
    })
})

// Buscar un usuario
router.get('/:id', (req, res, next) => {
  const { id } = req.params

  servicesUser.findOne(id)
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

// Crear un usuario
router.post('/', (req, res, next) => {
  const data = req.body
  servicesUser.create(data)
    .then(resp => {
      res.json({
        message: resp,
        data
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// Editar un usuario
router.patch('/:id', (req, res, next) => {
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
      console.log(err)
    })
})

// Eliminar usuario
router.delete('/:id', (req, res, next) => {
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
