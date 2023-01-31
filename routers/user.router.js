const express = require('express')
const router = express.Router()

// Ver el listado de los usuario
router.get('/', (req, res, next) => {
  res.send('Lista de usuarios')
})

// Buscar un usuario
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  res.json({
    message: 'Usuario',
    id
  })
})

// Crear un usuario
router.post('/', (req, res, next) => {
  const data = req.body
  res.json({
    message: 'Usuario creado',
    data
  })
})

// Editar un usuario
router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  const data = req.body
  res.json({
    message: 'Usuario editado',
    id,
    data
  })
})

// Eliminar usuario
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  res.json({
    message: 'Usuario eliminado',
    id
  })
})

module.exports = router
