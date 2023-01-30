const mongoose = require('mongoose')

const connectionString = process.env.MONGO_URI
console.log(connectionString)

mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  })
  .catch(error => {
    console.log(error)
    console.log('No connected')
  })
