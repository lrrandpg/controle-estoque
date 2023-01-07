const { Router } = require('express')
const routes = Router()
const UserController = require('../Controllers/UserController')
const SignIn = require('../Controllers/SignIn')
const SignUp = require('../Controllers/SignUp')
const {validateTokenJWT} = require('../Middleware/validateTokenJWT')




routes.post('/signup', SignUp.signUp)
routes.post('/signin', SignIn.signIn)
routes.put('/user/update/:id', validateTokenJWT, UserController.updateUser)
routes.delete('/user/delete/:id', validateTokenJWT, UserController.deleteUser)
routes.get('/user/list', validateTokenJWT, UserController.listUser)




module.exports = routes