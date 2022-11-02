const {matchedData} = require("express-validator");
const {encrypt} = require("../utils/handlePassword");
const {userModel} = require("../models");
const {tokenSign} = require("../utils/handleJwt");
const {handleHttpError} = require("../utils/handleError");
const {compare} = require("bcrypt");

/**
 * Registra un usuario
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = {...req, password};

    const dataUser = await userModel.create(body);
    dataUser.set("password", undefined, {strict: false});

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }
    res.send(data);
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
}

/**
 * Logear a una persona
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const loginController = async (req, res) => {
  try {
    //Cura la data solo con lo necesario en el modelo
    req = matchedData(req);
    const user = await userModel.findOne({email: req.email})//.select('password name role email');

    if (!user) {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }

    const hashPassword = user.password;
    const check = await compare(req.password, hashPassword);

    user.set('password', undefined, {strict: false});
    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    const data = {
      token: await tokenSign(user),
      user
    }

    res.send(data);

  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
}

module.exports = {registerController, loginController};