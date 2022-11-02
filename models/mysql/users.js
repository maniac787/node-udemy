const {sequelizeInstance} = require("../../config/mysql");
const {DataTypes} = require("sequelize");
const User = sequelizeInstance.define(
  "users",
  {
    name: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.NUMBER},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {
      type: DataTypes.ENUM({
        values: ['user', 'admin']
      })
    },

  },
  {
    timestamps: true,
  }
);
module.exports = User;