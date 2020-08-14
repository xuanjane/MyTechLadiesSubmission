require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const dogsRouter = require('./routes/dogs')
const userdetailsRouter = require('./routes/userdetails')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/* GET home page. */
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api/dogs', dogsRouter)
app.use('/users/userdetails', userdetailsRouter)

module.exports = app
