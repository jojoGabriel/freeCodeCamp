let long = /[A-Za-z0-9_]+/;
let short = /\w+/;

let numbers = "12345";
let col = "first_name";

let alpha = "The quick brown fox jumps over the lazy dog";
let allrex = /\w/g;

console.log(long.test(numbers));
console.log(short.test(numbers));

console.log(long.test(col));
console.log(short.test(col));

console.log(alpha.match(allrex).length);