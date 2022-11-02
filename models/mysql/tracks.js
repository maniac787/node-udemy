const {sequelizeInstance} = require("../../config/mysql");
const {DataTypes} = require("sequelize");
const Storage = require("./storage");

const Tracks = sequelizeInstance.define(
  "tracks",
  {
    name: {type: DataTypes.STRING},
    album: {type: DataTypes.STRING},
    cover: {type: DataTypes.STRING},
    artist_name: {type: DataTypes.STRING},
    artist_nickName: {type: DataTypes.STRING},
    artist_nationality: {type: DataTypes.STRING},
    duration_start: {type: DataTypes.NUMBER},
    duration_end: {type: DataTypes.NUMBER},
    mediaId: {type: DataTypes.STRING}
  },
  {
    timestamps: true,
  }
)

/**
 * Implementando modelo personalizado
 */
Tracks.findAllData = function () {
  Tracks.belongsTo(Storage, {
    foreignKey: 'mediaId',
    as: 'audio',
  })

  return Tracks.findAll({include: 'audio'})
}

Tracks.findOneData = function (id) {
  Tracks.belongsTo(Storage, {
    foreignKey: 'mediaId',
    as: 'audio',
  })

  return Tracks.findOne({where: {id}, include: 'audio'});
}

module.exports = Tracks;