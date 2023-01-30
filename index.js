require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome to Api Post')
})

app.listen(port, () => {
  console.log('API-REST lista en el puerto ' + port)
})
