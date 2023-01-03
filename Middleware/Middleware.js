//Gerando hash de senha com secret

const md5 = require('md5');
const SECRET = 'agua';

function gerarHashDaSenha(senha){
    return md5(`@${senha}: ${SECRET}@`);
}