const express = require("express");
const router = express.Router();
const Users = require('../Models/User')
const Middleware = require("../Middleware/Middleware")
const bcrypt = require('bcrypt')


async function signUp (req, res){
    const {name, password} = req.body

    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password, salt)

    if((name != undefined) && (password != undefined)){
        const users = await Users.create({
            name: name,
            password: hash
        })
        res.status(200), res.json(users)
    }else{
        res.status(401), res.json("message: Preencha todos os campos")
    }
 
    
 
    
}


async function signIn (req, res){
    const {name, password} = req.body

    const users = await Users.findOne({where:{name: name}}).then(users =>{
        if (users != undefined){
            var correct = bcrypt.compareSync(password, users.password)
            if(correct){
                res.status(200),res.json("message: Login efetuado com sucesso")
            }else{
                res.status(401),res.json("message: Senha inválida")
            }
        }else{
            res.status(401),res.json("message: Usuário inválido")
        }
    })
}

module.exports = {
    signUp,
    signIn
}
