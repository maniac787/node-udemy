const {sequelizeInstance} = require("../../config/mysql");
const {DataTypes} = require("sequelize");
const mongoose = require("mongoose");
const Storage = sequelizeInstance.define(
  "storages",
  {
    url: {type: DataTypes.STRING},
    fileName: {type: DataTypes.STRING},
  },
  {
    timestamps: true,
  }
);

module.exports = Storage;