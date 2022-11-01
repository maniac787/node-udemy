require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");

const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");

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
 * Aqui invocar a las rutas
 * Se genera un alias localhost/alias/__________
 */
app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`http:localhost:${port}`)
});

dbConnect();