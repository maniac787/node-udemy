const express = require("express");
const fs = require("fs");

router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
};

fs.readdirSync(PATH_ROUTES).filter(file => {
  const name = removeExtension(file); //TODO

  if (name !== 'index') {
    router.use(`/${name}`, require(`./${file}`)) //TODO http://localhost:3000/tracks
  }
})
module.exports = router;