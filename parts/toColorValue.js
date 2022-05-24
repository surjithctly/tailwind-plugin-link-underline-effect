module.exports = function toColorValue(maybeFunction) {
  return typeof maybeFunction === 'function'
    ? maybeFunction({})
    : maybeFunction;
};
