const { Router } = require('express')
const routes = Router()
const UserController = require('../Controllers/UserController')
const OrderController = require('../Controllers/OrderController')
const ProductController = require('../Controllers/ProductController')
const SignIn = require('../Controllers/SignIn')
const SignUp = require('../Controllers/SignUp')
const { validateTokenJWT } = require('../Middleware/validateTokenJWT')
const { port } = require('../config/database')



/*ROUTES USERS */
routes.post('/signup', SignUp.signUp)
routes.post('/signin', SignIn.signIn)
routes.put('/user/update/:id', validateTokenJWT, UserController.updateUser)
routes.delete('/user/delete/:id', validateTokenJWT, UserController.deleteUser)
routes.get('/user/list/all', validateTokenJWT, UserController.listAllUsers)

/*ROUTES ORDER */
routes.post('/order/create', validateTokenJWT, OrderController.createOrder)
routes.put('/order/update/:id', validateTokenJWT, OrderController.updateOrder)
routes.delete('/order/delete/:id', validateTokenJWT, OrderController.deleteOrder)
routes.get('/order/list/all', validateTokenJWT, OrderController.listAllOrders)
routes.get('/order/list/complete', validateTokenJWT, OrderController.listCompleteOrders)
routes.get('/order/list/inprogress', validateTokenJWT, OrderController.listInProgressOrders)

/*ROUTES PRODUCTS */
routes.post('/product/create', validateTokenJWT, ProductController.createProduct)
routes.put('/product/update/:id', validateTokenJWT, ProductController.updateProduct)
routes.get('/product/list/all', validateTokenJWT, ProductController.listAllProducts)
routes.delete('/product/delete/:id', validateTokenJWT, ProductController.deleteProducts)
routes.get('/product/list/available', validateTokenJWT, ProductController.listAvailableProducts)
routes.get('/product/list/unavailable', validateTokenJWT, ProductController.listUnavailableProducts)



module.exports = routes