const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema({
  name: String,
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  price: Number,
  description: String,
  color: String,
  size: String,
  image_url: String,
  stock: Number,
  created_at: {
    type: String,
    default: Date.now()
  },
  updated_at: {
    type: String,
    default: Date.now()
  }
})

let Item = mongoose.model('Item', itemSchema)

module.exports = Item