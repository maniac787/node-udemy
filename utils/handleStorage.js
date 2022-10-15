const multer = require("multer");
/**
 *
 */
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const pathStorage = `${__dirname}/../storage`;
    callback(null, pathStorage);
  },
  filename: function (req, file, callback) {
    //TODO: mi-cv.pdf
    const extension = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${extension}`;
    callback(null, filename);
  }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;