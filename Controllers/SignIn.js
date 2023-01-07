const Users = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = process.env.SECRET




async function signIn(req, res) {
    try {
        const { name, password } = req.body
        const users = await Users.findOne({ where: { name: name } }).then(users => {
            if (users != undefined) {
                var validationpass = bcrypt.compareSync(password, users.password)
                if (validationpass) {
                    const token = jwt.sign({ id: users.id, name: users.name, password: users.password }, SECRET, { expiresIn: 300 })
                    res.status(200).json({ auth: true, token })
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