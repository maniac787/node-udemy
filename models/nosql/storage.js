const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
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
StorageScheme.plugin(mongooseDelete, {overrideMethods: 'all'});
module.exports = mongoose.model("storages", StorageScheme);