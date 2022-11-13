const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV;

const dbConnect = () => {
  const DB_URI = (NODE_ENV === 'test') ? process.env.DB_URI : process.env.DB_URI_TEST;

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (error, res) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("Conexion correcta");
    }
  });

}

module.exports = dbConnect;