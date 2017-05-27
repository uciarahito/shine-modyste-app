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
} //createCategory

methods.getAllCategory = (req, res) => {
  if (req.body.role === "admin") {
    Category.find({}, (err, records) => {
      if (err) res.json({err})
      console.log('Get All Category success');
      console.log(records);
      res.send(records)
    })
  } else {
    res.send('You are not authorized')
  }
} //getAllCategory

methods.getCategoryById = (req, res) => {
  if (req.body.role === "admin") {
    Category.findById(req.params.id, (err, record) => {
      if (err) res.json({err})
      console.log('Get Category by id success');
      console.log(record);
      res.send(record)
    })
  } else {
    res.send('You are not authorized')
  }
} //getCategoryById

methods.editCategoryById = (req, res) => {
  if (req.body.role === "admin") {
    Category.findById(req.params.id, (err, record) => {
      if (err) res.json({err})
      console.log('Get Category by id success');
      console.log(record);

      Category.updateOne({
        "_id": record._id
      }, {
        $set: {
          "name": req.body.name || record.name,
          "code_category": req.body.code_category || record.code_category
        }
      })
      .exec((err, result) => {
          if (err) res.json({err})
          console.log('Edit category success');
          res.send(record)
      })
    })
  } else {
    res.send('You are not authorized')
  }
} //editCategoryById

methods.deleteCategoryById = (req, res) => {
  if (req.body.role === "admin") {
    Category.findById(req.params.id, (err, record) => {
      if (err) res.json({err})
      console.log('Get Category by id success');
      console.log(record);

      Category.deleteOne({
        "_id": record._id
      }, (err, result) => {
        if (err) res.json({err})
        console.log('Delete Category success');
        console.log(record);
        res.send(record)
      })
    })
  } else {
    res.send('You are not authorized')
  }
} //deleteCategoryById

module.exports = methods