const Sequelize = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();
const PORTBD = process.env.PORTBD;
const HOST = process.env.HOST;
const BDNAME = process.env.BDNAME;
const USERBD = process.env.USERBD;
const PASSWORDBD = process.env.PASSWORDBD;



const connection = new Sequelize(BDNAME,USERBD,PASSWORDBD,{
  host: HOST,
  port: PORTBD,
  dialect: 'mysql'
});

module.exports = connection;


