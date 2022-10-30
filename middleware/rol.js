/**
 * Arreglo con los roles permitidos
 * @param role
 * @returns {(function(*, *, *))|*}
 */
const {handleHttpError} = require("../utils/handleError");
const checkRole = (roles) => (req, res, next) => {
  try {
    const {user} = req;
    const rolesByUser = user.role;
    //['admin', 'manager']
    const checkValueRole = roles.some(
      roleSingle => rolesByUser.includes(roleSingle)
    );

    if (!checkValueRole) {
      handleHttpError(res, "USER_NOT__PERMISSIONS", 403)
      return
    }

    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403)
  }
}

module.exports = checkRole;