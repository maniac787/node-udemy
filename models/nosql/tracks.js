const mongoose = require("mongoose");
const TrackScheme = new mongoose.Schema({
    name: {type: String},
    album: {type: String},
    cover: {
      type: String, validate: {
        validator: req => {
          return true;
        },
        message: "ERROR_URL"
      }
    },
    artist: {
      name: {type: String},
      nickName: {type: String},
      nationality: {type: String},
    },
    duration: {
      start: {type: Number},
      end: {type: Number}
    },
    mediaId: {
      type: mongoose.Types.ObjectId
    }
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false
  }
);
//coleccion en mongo, definicion modelo
module.exports = mongoose.model("tracks", TrackScheme)