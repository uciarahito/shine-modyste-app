const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  uuid: String,
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  image_url: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  },
  token: String,
  role: {
    type: String,
    default: 'user'
  }
})

let User = mongoose.model('User', userSchema)
module.exports = User