/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */


const { composition } = require("./modules/math/composition.js");
const { division } = require("./modules/math/division.js");
const { multiplication } = require("./modules/math/multiplication.js");
const { substraction } = require("./modules/math/subtraction.js");

const { one, two, three, four, five } = require("./modules/numbers/numbers.js");



let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);