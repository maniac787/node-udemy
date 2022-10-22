const express = require("express");
const {validatorRegister, validatorLogin} = require("../validators/auth");
const {matchedData} = require("express-validator");
const router = express.Router();
const {encrypt, compare} = require("../utils/handlePassword")
const {userModel} = require("../models")

//TODO localhost:3000/api/auth/login
//TODO localhost:3000/api/auth/register
router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password)
  const body = {...req, password};

  const data = await userModel.create(body);
  data.set("password", undefined, {strict: false});
  res.send(data);
});

router.post("/login", validatorLogin, (res, req) => {

});

module.exports = router;