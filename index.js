require('dotenv').config()
require('./database/connect')
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routerApi = require('./routers')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Api Post')
})

routerApi(app)

app.listen(port, () => {
  console.log('API-REST lista en el puerto ' + port)
})
