const express = require("express");
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

const router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;