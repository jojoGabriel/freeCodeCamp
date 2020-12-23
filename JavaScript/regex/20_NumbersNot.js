let string = "Year 2020 at 2/20 20:20";
let regexp = /\D/g; // [0-9]*

console.log(string.match(regexp));

regexp = /[^0-9]/g;
console.log(string.match(regexp));