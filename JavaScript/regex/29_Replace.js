let string = "I'm a programmer";
let regexp = /programmer/;

let newStr = string.replace(regexp, 'coder');

console.log(string);
console.log(newStr);

let text = "veni vidi vicci";
let regex = /(\w+)\s(\w+)\s(\w+)/;

console.log(text);
console.log(text.replace(regex, '$3 $2 $1'));
