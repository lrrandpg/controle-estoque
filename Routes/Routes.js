const { Router } = require('express')
const routes = Router()
const UserController = require('../Controllers/UserController')




routes.post('/signup', UserController.signUp)
routes.post('/signin', UserController.signIn)




module.exports = routes