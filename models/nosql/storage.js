const mongoose = require("mongoose");
const StorageScheme = new mongoose.Schema({
    url: {type: String},
    fileName: {type: String},

  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false
  }
);
//coleccion en mongo, definicion modelo
module.exports = mongoose.model("storages", StorageScheme)