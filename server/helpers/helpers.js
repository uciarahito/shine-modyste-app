const bCrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
let methods = {}

methods.check_token = (req, res, next) => {
  let token = req.headers.token
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (decoded) {
      req.body.role = decoded.role
      next()
    } else {
      res.json({err})
    }
  })
}

module.exports = methods