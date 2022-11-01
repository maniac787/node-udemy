require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");

const morganBody = require("morgan-body");
const {IncomingWebhook} = require("@slack/webhook");

app.use(cors());
app.use(express.json());
const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);
//Expone los recursos publicos
app.use(express.static("storage"));

const loggerStream = {
  write: message => {
    // do anything - emit to websocket? send message somewhere? log to cloud?
    console.log("CAPTURANDO EL LOG", message)
    webHook.send({text: message})
  },
};


morganBody(app, {
  noColors: true,
  stream: loggerStream

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