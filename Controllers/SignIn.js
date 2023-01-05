const express = require("express");
const router = express.Router();
const Users = require('../Models/User')
const bcrypt = require('bcrypt')



async function signIn(req, res) {
    try {
        const { name, password } = req.body
        const users = await Users.findOne({ where: { name: name } }).then(users => {
            if (users != undefined) {
                var correct = bcrypt.compareSync(password, users.password)
                if (correct) {
                    res.status(200), res.json("message: Login efetuado com sucesso")
                } else {
                    res.status(401), res.json("message: Senha inválida")
                }
            } else {
                res.status(401), res.json("message: Usuário inválido")
            }
        })
    } catch (error) {
        res.status(401), res.json(error)
    }


}


module.exports = {
    signIn
}