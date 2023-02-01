require('dotenv').config()
require('./database/connect')
const cors = require('cors')
const express = require('express')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const app = express()
const port = process.env.PORT || 3000
const routerApi = require('./routers')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Api Post')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('API-REST lista en el puerto ' + port)
})
