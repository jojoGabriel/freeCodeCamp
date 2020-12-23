// const PI = function () {
//     return 3.14;
// }

// const PI2 = () => 3.14;

// console.log(PI);
// console.log(PI2);

// no parameter
const hello = () => "Hello!";
console.log(hello());

// with parameter
const helloName = (name) => "Hello " + name + "!";
console.log(helloName("John"));

// with default value
const mult = (x, y = 1) => x * y;
console.log(mult(3, 2));
console.log(mult(3));

