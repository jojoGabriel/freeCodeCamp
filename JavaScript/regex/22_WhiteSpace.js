let string = "zero one two three";
let regexp = /\s/g;

console.log(string.match(regexp).length);

regexp = /\S/g;
console.log(string.match(regexp).length);