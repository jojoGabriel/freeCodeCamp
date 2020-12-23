let string = "The quick brown fox";
let regexp = /fox/;
console.log("fox", regexp.test(string));

regexp = /Fox/;
console.log("Fox", regexp.test(string));

regexp = /FOX/;
console.log("FOX", regexp.test(string));