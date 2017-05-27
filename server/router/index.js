const express = require('express')
const router = express.Router()
let userController = require('../controllers/userController')
let categoryController = require('../controllers/categoryController')
let helpers = require('../helpers/helpers')

// NOTE: user
router.post('/signUp', userController.signUp)
router.post('/signIn', userController.signIn)
router.get('/allUsers', helpers.check_token, userController.getAllUsers)
router.get('/detailUser/:id', helpers.check_token, userController.getUserById)
router.put('/editUser/:id', helpers.check_token, userController.editUser)  // password harus disertakan
router.delete('/deleteUser/:id', helpers.check_token, userController.deleteUserById)

// NOTE: category
router.post('/createCategory', helpers.check_token, categoryController.createCategory)

module.exports = router