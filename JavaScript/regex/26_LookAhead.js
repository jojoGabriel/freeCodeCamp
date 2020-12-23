let string = "veni vidi vicci";

// positive lookahead. veni must be followed by vidi
let regexp = /veni\s(?=vidi)/;
console.log(string.match(regexp));

// positive lookahead. veni must be followed by viedi
regexp = /veni\s(?=viedi)/;
console.log(string.match(regexp));

// negative lookahead. veni must NOT be followed by vidi
regexp = /veni\s(?!vidi)/;
console.log(string.match(regexp));

// positive lookahead. veni must NOT be followed by viedi
regexp = /veni\s(?!viedi)/;
console.log(string.match(regexp));
