const chalk = require("chalk");
const validator = require("validator");
const { name, add } = require("./utils.js");
const { sum } = require("./sum.js");
console.log(name);
console.log(add(2, 3));
console.log(chalk.red(sum(3, 3)));
console.log(chalk.white.bgGreen(validator.isEmail("thanh@gmail.com")));
console.log(chalk.green("Success!"));
