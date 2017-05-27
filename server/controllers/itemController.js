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
} //createItem

methods.getAllItem = (req, res) => {
  Item.find({})
  .populate('category')
  .exec((err, records) => {
    if (err) req.json(err)
    console.log('Get all item success');
    console.log(records);
    res.send(records)
  })
}

methods.getItemById = (req, res) => {
  Item.findById(req.params.id)
  .populate('category')
  .exec((err, record) => {
    if (err) req.json(err)
    console.log('Get item by id success');
    console.log(record);
    res.send(record)
  })
}


methods.editItemById = (req, res) => {
  Item.findById(req.params.id)
  .populate('category')
  .exec((err, record) => {
    if (err) req.json(err)
    console.log('Get item by id success');
    console.log(record);
    Item.updateOne({
      "_id": record._id
    }, {
      $set: {
        "name": req.body.name || record.name,
        "category": req.body.category || record.category,
        "price": req.body.price || record.price,
        "description": req.body.description || record.description,
        "color": req.body.color || record.color,
        "size": req.body.size || record.size,
        "image_url": req.body.image_url || record.image_url,
        "stock": req.body.stock || record.stock
      }
    })
    .exec((err, result) => {
      if (err) res.json({err})
      console.log('Edit item success');
      res.send(record)
    })
  })
}

methods.deleteItemById = (req, res) => {
  Item.findById(req.params.id)
  .populate('category')
  .exec((err, record) => {
    if (err) req.json(err)
    console.log('Get item by id success');
    console.log(record);
    Item.deleteOne({
      "_id": record._id
    })
    .exec((err, result) => {
      if (err) res.json({err})
      console.log('Delete item success');
      res.send(record)
    })
  })
}

module.exports = methods