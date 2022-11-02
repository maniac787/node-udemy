const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties();
/**
 * Genera el token
 * @param user
 * @returns {Promise<*>}
 */
const tokenSign = async (user) => {
  const sign = await jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role
    },
    JWT_SECRET,
    {expiresIn: "2h"}
  );

  return sign;
}
/**
 * Token de session
 * @param tokenJwt
 * @returns {Promise<*|null>}
 */
const verifyToken = async (tokenJwt) => {
  try {
    return await jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
}

module.exports = {tokenSign, verifyToken};