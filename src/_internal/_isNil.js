/**
 * Checks if the provided value is null or undefined
 * @param {Any} x The value to check
 * @returns {Boolean} Whether or not the value was null/undefined
 */
const _isNil = function (x) {
  return x == null
}

module.exports = _isNil
