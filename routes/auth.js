const express = require("express");
const {validatorRegister, validatorLogin} = require("../validators/auth");
const router = express.Router();

const {registerController, loginController} = require("../controllers/auth");

//TODO localhost:3000/api/auth/login
//TODO localhost:3000/api/auth/register
router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);

module.exports = router;