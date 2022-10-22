const bcrypt = require("bcrypt");

/**
 *
 * @param passwordPlain
 * @returns {Promise<void>}
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcrypt.hash(passwordPlain, 10);
  return hash;
};

/**
 * Contrasenia
 * @param passwordPlain
 * @param hashPassword
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = {encrypt, compare};