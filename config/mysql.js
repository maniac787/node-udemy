const {Sequelize} = require("sequelize");
const NODE_ENV = process.env.NODE_ENV;
const host = process.env.MYSQL_HOST;

const database = (NODE_ENV === 'test') ? process.env.MYSQL_DATABASE_TEST: process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;

const sequelizeInstance = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect: "mysql"
  }
);

const dbConnectMysql = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Conexion correcta");
  } catch (e) {
    console.log("MYSQL error de conexion", e);
  }
}

module.exports = {sequelizeInstance, dbConnectMysql}