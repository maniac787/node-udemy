require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnectNoSql = require("./config/mongo");
const {dbConnectMysql} = require("./config/mysql");

const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration = require("./docs/swagger");

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
//Expone los recursos publicos
app.use(express.static("storage"));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400
  }
});

const port = process.env.PORT || 3001;

/**
 *
 */
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openApiConfiguration))

/**
 * Aqui invocar a las rutas
 * Se genera un alias localhost/alias/__________
 */
app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`http:localhost:${port}`)
});

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMysql();