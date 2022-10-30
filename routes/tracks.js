const express = require("express");
const authMiddleware = require("../middleware/session");
const roleMiddleware = require("../middleware/rol");

const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
// const customHeader = require("../middleware/customHeader");

const router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE

router.get("/",authMiddleware,  getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", authMiddleware, roleMiddleware(['admin']), validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;