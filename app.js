require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");

const morganBody = require("morgan-body");
const {IncomingWebhook} = require("@slack/webhook");

app.use(cors());
app.use(express.json());
const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK);
//Expone los recursos publicos
app.use(express.static("storage"));

const loggerStream = {
  write: message => {
    webhook.send({
      text: message
    })
    logger.info(message);
  },
};


morganBody(app, {
  noColors: true,

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