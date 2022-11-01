const {IncomingWebhook} = require("@slack/webhook");
const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

const loggerStream = {
  write: message => {
    // do anything - emit to websocket? send message somewhere? log to cloud?
    console.log("CAPTURANDO EL LOG", message)
    webHook.send({text: message})
  },
};

module.exports = loggerStream;