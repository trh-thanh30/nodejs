const sum = (a, b) => {
  if (a == b) {
    const warning = "Warning";
    return warning;
  }
  return a + b;
};
module.exports = { sum };
