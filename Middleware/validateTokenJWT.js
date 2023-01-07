const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.SECRET



function validateTokenJWT(req, res, next) {
    var token = req.headers['x-access-token']
    if (!token) return res.status(401).send({ auth: false, message: 'Token não informado.' })
    /*Verificando o TOKEN */
    jwt.verify(token, SECRET, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Token inválido.' })

        req.id= decoded.id
        req.name = decoded.name
        console.log("_id: " + decoded.id, "name: " + decoded.name)
        next()
    });
} 

module.exports = {
    validateTokenJWT
}