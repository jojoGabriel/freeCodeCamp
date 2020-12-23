let start = "Red roses";
let end = "Roses are red";

let regexp = /^Red/i;

console.log(regexp.test(start));
console.log(regexp.test(end));