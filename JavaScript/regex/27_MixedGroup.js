let washington = "George Washington";
let bush = "George W. Bush";

let regexp = /George.+(Washington|Bush)/;
console.log(regexp.test(washington));
console.log(regexp.test(bush));