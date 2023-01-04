const express = require("express");
const app = express();
const routes = require('./Routes/Routes')
require('./Database')




app.use(express.json());
app.use(routes);




/*Rodando servidor WEB */
app.listen(80, () => {
    console.log('App rodando na porta 80');
});