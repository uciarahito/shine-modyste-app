const express = require('express')
const app = express()
const index = require('./router/index')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const Strategy = require('passport-local').Strategy
require('dotenv').config()

// NOTE: connect to DB
mongoose.connect('mongodb://localhost/shine-modyste')

// NOTE: spesial
app.use(cors())

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/', index)

// NOTE: listen
app.listen(app.get('port'), () => {
  console.log('Listening on port '+ app.get('port'));
})