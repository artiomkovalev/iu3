const isString = (e) => typeof e === "string";
const isNumber = (e) => typeof e === "number";
const isArray = (e) => Array.isArray(e);

module.exports = {
  isString,
  isNumber,
  isArray
};
