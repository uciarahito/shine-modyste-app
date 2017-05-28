const Order = require('../models/order')
const Item = require('../models/item')
let helpers = require('../helpers/helpers')
let methods = {}

methods.createOrder = (req, res) => {
  let newOrder = new Order({
    user: req.body.user,
    code_order: req.body.code_order,
    itemlist: req.body.itemlist,
    due_date: helpers.dueDate(6)
  })
  console.log('Due date: '+helpers.dueDate(6));

  Item.find({}, (err, items) => {
    items.forEach(item => {
      req.body.itemlist.forEach(item => {
        console.log(item);
        console.log(item._id);
        if (item == item._id) {
          item.stock -= 1
          item.save()

          newOrder.save((err, record) => {
            if (err) res.json({err})
            console.log("Create order success");
            console.log(record);
            res.send(record)
          })
        } else {
          res.send('Stock book is empty')
        }
      })
    })
  })
}

methods.addItemOrder = (req, res) => {
  Order.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById transaction success');

    Item.find({}, (err, items) => {
      items.forEach(item => {
        req.body.itemlist.forEach(newItem => {
          console.log('NewItem: '+newItem);
          console.log('Item: '+item._id);
          if (item.stock === 0) {
            res.send('Stock item is empty')
          } else {
            if (newItem == item._id) {
              item.stock -= 1
              item.save()
              
              record.itemlist.push(req.body.itemlist)
              record.save(err => {
                res.send(record)
              })
            }
          }
        })
      })
    })
  })
}

methods.getAllOrder = (req, res) => {
  Order.find({})
  .populate('user itemlist')
  .exec((err, records) => {
    if (err) res.json({err})
    console.log('Get All Order success');
    console.log(records);
    res.send(records)
  })
}

methods.getOrderById = (req, res) => {
  Order.findById(req.params.id)
  .populate('user itemlist')
  .exec((err, record) => {
    if (err) res.json({err})
    console.log('Get Order by id success');
    console.log(record);
    res.send(record)
  })
}

methods.editOrderById = (req, res) => {
  Order.findById(req.params.id)
  .populate('user itemlist')
  .exec((err, record) => {
    if (err) res.json({err})
    console.log('Get Order by id success');
    console.log(record);
    Order.updateOne({
      "_id": record._id
    }, {
      $set: {
        "user": req.body.user || record.user,
        "code_order": req.body.code_order || record.code_order,
        "itemlist": req.body.itemlist || record.itemlist,
        "due_date": helpers.dueDate(record.days)
      }
    })
    .exec((err, result) => {
      Item.find({}, (err, items) => {
        items.forEach(item => {
          if (req.body.itemlist == null) {
            res.send(result)
          } else {
            if (item.stock < 1) {
              res.send('Stock habis')
            } else {
              req.body.itemlist.forEach(newItem => {
                record.itemlist.forEach(oldItem => {
                  console.log('olditem: '+oldItem._id);
                  console.log('newItem: '+newItem);
                  console.log('item: '+item._id);
                  if (newItem !== oldItem._id) {
                    console.log('Coba');
                    item.stock -= 1
                    item.save()

                    res.send(record)
                  } else {
                    res.send(record)
                  }
                })
              })
            }
          }
        })
      })
    })
  })
}



module.exports = methods