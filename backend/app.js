const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')
require('dotenv').config()

mongoose.connection.on('error', function(err) {
  console.log(err)
})

mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.p9z1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => console.log('on'))

const corsOptions = {
  exposedHeaders: ['token']
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/', routes)

app.listen(process.env.PORT)