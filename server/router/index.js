const express = require('express')
const router = express.Router()
let userController = require('../controllers/userController')
let categoryController = require('../controllers/categoryController')
let itemController = require('../controllers/itemController')
let orderController = require('../controllers/orderController')
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

// NOTE: item
router.post('/createItem', helpers.check_token, itemController.createItem)
router.get('/allItem', itemController.getAllItem)
router.get('/detailItem/:id', itemController.getItemById)
router.put('/editItem/:id', helpers.check_token, itemController.editItemById)
router.delete('/deleteItem/:id', helpers.check_token, itemController.deleteItemById)

// NOTE: order
router.post('/createOrder', orderController.createOrder)
router.get('/allOrder', orderController.getAllOrder)
router.get('/detailOrder/:id', orderController.getOrderById)
router.put('/editOrder/:id', orderController.editOrderById)
router.post('/addItemOrder/:id', orderController.addItemOrder)
router.delete('/deleteOrder/:id', orderController.deleteOrderById)

module.exports = router