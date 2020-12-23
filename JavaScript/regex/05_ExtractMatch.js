let string = "Everybody wants to rule the world";
let regexp = /World/i;

let result = string.match(regexp);
console.log(result[0]);