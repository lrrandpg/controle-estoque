const Users = require('../Models/User')
const bcrypt = require('bcrypt')




async function signUp(req, res) {
    try {
        const { name, password } = req.body
        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(password, salt)
        if ((name != undefined) && (password != undefined)) {
            const users = await Users.create({
                name: name,
                password: hash
            })
            res.status(200), res.json(users)
        } else {
            res.status(401), res.json("message: Preencha todos os campos")
        }
    } catch (error) {
        res.status(401).json(error)
    }

}


module.exports = {
    signUp
}