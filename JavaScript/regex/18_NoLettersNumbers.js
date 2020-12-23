let whatev = "kdsjf9(#*(#kldsf!(&#@&()";
let regexp = /\W/g; // same as [^A-Za-z0-9_]

console.log(whatev.match(regexp));