const express = require("express");
const {getItems, getItem, createItem} = require("../controllers/tracks");

const router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);

module.exports = router;