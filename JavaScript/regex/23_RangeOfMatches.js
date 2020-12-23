let zs = 'ww zzzzz www';
let zz = 'ww zz ww';

let regexp = /\sz{3,5}\s/;

console.log(regexp.test(zs));
console.log(regexp.test(zz));

regexp = /\sz{3,}\s/;
console.log(regexp.test(zs));
console.log(regexp.test(zz));