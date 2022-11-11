const express = require("express");
const authMiddleware = require("../middleware/session");
const roleMiddleware = require("../middleware/rol");

const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
// const customHeader = require("../middleware/customHeader");

const router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE
/**
 * //TODO localhost:3000/api/auth/register
 * Register new user
 * @openapi
 * /tracks:
 *    get:
 *        tag:
 *            - auth
 *        summary: "List all tracks"
 *        description: "This path is to register new user"
 *        requestBody:
 *            content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/track"
 *        responses:
 *            '201':
 *                description: "Registration Ok"
 *            '403':
 *                description: "error user validation"
 */
router.get("/",authMiddleware,  getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", authMiddleware, roleMiddleware(['admin']), validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;