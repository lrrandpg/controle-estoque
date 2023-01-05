const { Router } = require('express')
const routes = Router()
const UserController = require('../Controllers/UserController')
const SignIn = require('../Controllers/SignIn')
const SignUp = require('../Controllers/SignUp')




routes.post('/signup', SignUp.signUp)
routes.post('/signin', SignIn.signIn)
routes.put('/user/update/:id', UserController.updateUser)
routes.delete('/user/delete/:id', UserController.deleteUser)
routes.get('/user/list', UserController.listUser)




module.exports = routes