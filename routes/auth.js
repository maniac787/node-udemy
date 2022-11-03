const express = require("express");
const {validatorRegister, validatorLogin} = require("../validators/auth");
const router = express.Router();

const {registerController, loginController} = require("../controllers/auth");

//TODO localhost:3000/api/auth/login
//TODO localhost:3000/api/auth/register

/**
 * Register new user
 * @openapi
 * /auth/register:
 *    post:
 *        tag:
 *            - auth
 *        summary: "Register new user"
 *        description: "This path is to register new user"
 *        requestBody:
 *            content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/authRegister"
 *        responses:
 *            '201':
 *                description: "Registration Ok"
 *            '403':
 *                description: "error user validation"
 */
router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);

module.exports = router;