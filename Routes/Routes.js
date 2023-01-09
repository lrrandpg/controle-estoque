const { Router } = require('express')
const routes = Router()
const UserController = require('../Controllers/UserController')
const OrderController = require('../Controllers/OrderController')
const SignIn = require('../Controllers/SignIn')
const SignUp = require('../Controllers/SignUp')
const {validateTokenJWT} = require('../Middleware/validateTokenJWT')




routes.post('/signup', SignUp.signUp)
routes.post('/signin', SignIn.signIn)
routes.put('/user/update/:id', validateTokenJWT, UserController.updateUser)
routes.delete('/user/delete/:id', validateTokenJWT, UserController.deleteUser)
routes.get('/user/list', validateTokenJWT, UserController.listUser)
routes.post('/order/create', validateTokenJWT, OrderController.createOrder)
routes.put('/order/update/:id', validateTokenJWT, OrderController.updateOrder)
routes.get('/order/list', validateTokenJWT, OrderController.listOrder)




module.exports = routes