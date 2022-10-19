const express = require("express");
const {getItems, getItem, createItem} = require("../controllers/tracks");
const {validatorCreateItem} = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

const router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validatorCreateItem, createItem);

module.exports = router;