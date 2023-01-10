const User = require('../Models/User');
const bcrypt = require('bcrypt');



async function updateUser(req, res) {
    try {
        const { id } = req.params
        const { name, password } = req.body

        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(password, salt)
        const user = await User.findOne({ where: { id } })
        if (!user) {
            res.status(401).json({ message: 'Nenhum usuário encontrado' })
        } else {
            const user = await User.update({ name, password: hash }, { where: { id } })
            const user_updated = await User.findOne({ where: { id } })
            res.status(200).json({user_updated})
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params
        const user = await User.findOne({ where: { id } })
        if (!user) {
            res.status(401).json({ message: 'Nenhum usuário encontrado' })
        } else {
            await User.destroy({ where: { id } })
            res.status(200).json({ message: 'Usuário deletado com sucesso' })
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

async function listAllUsers(req, res) {
    try {
        const user = await User.findAll()
        if (user == undefined) {
            res.status(401).json({ message: 'Não existem usuários cadastrados' })
        } else {
            res.status(200).json({ user })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = {
    updateUser,
    deleteUser,
    listAllUsers
}
