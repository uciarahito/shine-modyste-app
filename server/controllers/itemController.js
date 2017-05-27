const Item = require('../models/item')
let methods = {}

methods.createItem = (req, res) => {
  if (req.body.role === "admin") {
    let newItem = new Item({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      color: req.body.color,
      size: req.body.size,
      image_url: req.body.image_url,
      stock: req.body.stock
    })

    newItem.save((err, record) => {
      if (err) res.json({err})
      console.log('Create new item success');
      res.json(record)
    })
  } else {
    res.send('You are not authorized')
  }
}

module.exports = methods