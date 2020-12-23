let string = "01 01 01";
let regexp = /(\d+)(\s)\1\2\1/;

console.log(regexp.test(string));
console.log(string.match(regexp));
