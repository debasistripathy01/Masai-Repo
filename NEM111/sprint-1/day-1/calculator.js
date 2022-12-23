let { sum, sub, mult, divide, sin, cos, tan } = require("./calc.js");

console.log(sum(2, 3));
console.log(sub(10, 40));
console.log(mult(10, 40));
console.log(divide(20, 10));
console.log(sin(1));
console.log(cos(2));
console.log(tan(2));

const random = require("crypto");
const n = random.randomInt(10);
console.log(n);