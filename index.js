const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const dotenv = require('dotenv');

dotenv.config();

const PORTWEB = process.env.PORTWEB;
const PORTBD = process.env.PORTBD;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




/*Conexão com banco de dados */
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados na porta", PORTBD);
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });



/*Rodando servidor WEB */
app.listen(PORTWEB, () => {
    console.log('App rodando na porta',PORTWEB);
});