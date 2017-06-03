const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  code_order: String,
  itemlist: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  count: {
    type: Number,
    default: 1
  },
  due_date: Date,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  },
  days: {
    type: Number,
    default: 6
  }
})

let Order = mongoose.model('Order', orderSchema)
module.exports = Order