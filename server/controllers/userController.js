const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bCrypt = require('bcrypt')
const saltRounds = 10
let methods = {}

methods.signUp = (req, res) => {
  let pwd = req.body.password
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: bCrypt.hashSync(pwd, saltRounds),
    email: req.body.email,
    phone: req.body.phone,
    image_url: req.body.image_url
  })
  newUser.save((err, data) => {
    if (err) res.json({err})
    console.log('SignUp success');
    console.log(data);;
    res.send(data)
  })
}

methods.signIn = (req, res) => {
  let pwd = req.body.password
  User.findOne({
    username: req.body.username
  })
  .then(record => {
    console.log('Record data user login');
    console.log(record);
    if (bCrypt.compareSync(pwd, record.password)) {
      let token = jwt.sign({
        id: record._id,
        username: record.username,
        email: record.email,
        phone: record.phone,
        image_url: record.image_url,
        role: record.role
      }, process.env.SECRET_KEY, { expiresIn: '1d'})
      console.log('token login: '+token);
      res.json({
        message: 'SignIn success',
        id: record._id,
        username: record.username,
        role: record.role,
        token
      })
    } else {
      res.json({
        message: "Your password don't match"
      })
    }
  })
}

methods.getAllUsers = (req, res) => {
  if (req.body.role === "admin") {
    User.find({}, (err, records) => {
      if (err) res.json({err})
      console.log('Data all user success');
      console.log(records);
      res.json(records)
    })
  } else {
    res.send('You are not authorized')
  }
}

methods.getUserById = (req, res) => {
  if (req.body.role === "admin" || req.body.role === "user") {
    User.findById(req.params.id, (err, record) => {
      if (err) res.json({err})
      console.log('Detail User success');
      console.log(record);
      res.json(record)
    })
  } else {
    res.send('You are not authorized')
  }
}

methods.editUser = (req, res) => {
  let pwdUser = req.body.password
  if (req.body.role === "admin" || req.body.role === "user") {
    User.findById(req.params.id)
    .then(response => {
      console.log(response._id);
      console.log('Masuk gakkk: '+ req.body.name);
      console.log('pwd hash di editUser:  '+bCrypt.hashSync(pwdUser, saltRounds));
      User.updateOne({
        "_id": response._id
      }, {
        $set: {
          "name": req.body.name || response.name,
          "username": req.body.username || response.username,
          "password": bCrypt.hashSync(pwdUser, saltRounds) || response.password,
          "email": req.body.email || response.email,
          "phone": req.body.phone || response.phone,
          "image_url": req.body.image_url || response.image_url
        }
      })
      .then(result => {
        res.json(response)
      })
    })
    .catch(err => {
      console.log('Error, masuk catch');
    })
  } else {
    req.send('You are not authorized')
  }
} //editUser

methods.deleteUserById = (req, res) => {
  if (req.body.role === "admin" || req.body.role === "user") {
    User.findById(req.params.id, (err, record) => {
      User.deleteOne({
        "_id": record._id
      }, (err, response) => {
        if (err) res.json({err})
        console.log('Delete user success');
        console.log(record);
        res.json(record)
      })
    })
  } else {
    res.send('You are not authorized')
  }
}

module.exports = methods