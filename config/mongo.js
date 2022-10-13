const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;

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