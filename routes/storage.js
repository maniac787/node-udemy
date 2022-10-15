const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controllers/storage");

const router = express.Router();
//TODO: http://loclahost/storage GET, POST, PUT, DELETE


router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;