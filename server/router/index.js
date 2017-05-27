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
router.get('/allCategory', helpers.check_token, categoryController.getAllCategory)
router.get('/detailCategory/:id', helpers.check_token, categoryController.getCategoryById)
router.put('/editCategory/:id', helpers.check_token, categoryController.editCategoryById)
router.delete('/deleteCategory/:id', helpers.check_token, categoryController.deleteCategoryById)

module.exports = router