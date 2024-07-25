const validator = require("validator");
const { name, add } = require("./utils.js");
const { sum } = require("./sum.js");
console.log(name);
console.log(add(2, 3));
console.log(sum(3, 3));
console.log(validator.isEmail("thanh@gmail.com"));
