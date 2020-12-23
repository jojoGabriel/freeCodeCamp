let string = "supercalifragilisticexpialidocious";
let greedy = /s[a-z]*i/;
let lazy = /s[a-z]?i/;

console.log(string.match(greedy));
console.log(string.match(lazy));