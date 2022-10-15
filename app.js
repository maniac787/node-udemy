require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const dbConnect = require("./config/mongo");

app.use(cors());
app.use(express.json())
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