const express = require("express");

router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE

router.get("/tracks", (req, res) => {
  const data = ["Hola", "mundo"];
  res.send(data)
})

module.exports = router;