const Category = require('../models/category')
let methods = {}

methods.createCategory = (req, res) => {
  if (req.body.role === "admin") {
    let newCategory = new Category({
      name: req.body.name,
      code_category: req.body.code_category
    })

    newCategory.save((err, record) => {
      if (err) res.json({err})
      console.log('Create new Category success');
      console.log(record);
      res.send(record)
    })
  } else {
    res.send('You are not authorized')
  }
}

module.exports = methods