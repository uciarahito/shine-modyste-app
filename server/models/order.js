const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  code_order: String,
  itemlist: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  created_at: Date,
  update_at: Date,
  due_date: Date,
  days: {
    type: Number,
    default: 6
  }
})

let Order = mongoose.model('Order', orderSchema)
modules.exports = Order