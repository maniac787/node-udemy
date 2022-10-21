const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const {createItem, getItem, getItems, deleteItem, updateItem} = require("../controllers/storage");
const {validatorCreateItem, validatorGetItem} = require("../validators/storage");

const router = express.Router();
//TODO: http://loclahost/storage GET, POST, PUT, DELETE


router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);
router.put("/", uploadMiddleware.single("myfile"), updateItem);
router.delete("/:id", validatorGetItem, uploadMiddleware.single("myfile"), deleteItem);

module.exports = router;