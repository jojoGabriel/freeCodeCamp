let string = "  Happy Birthday!  ";
let regexp = /^\s+|\s+$/g;
console.log('x', string, 'x');
console.log('x', string.replace(regexp, ""), 'x');
