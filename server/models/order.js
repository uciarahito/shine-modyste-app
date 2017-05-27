const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  code_order: String,
  item: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  created_at: {
    type: String,
    default: Date.now()
  }
})

let Order = mongoose.model('Order', orderSchema)
modules.exports = Order