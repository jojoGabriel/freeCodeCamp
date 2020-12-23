var x = 1;
var y = 2;

if (x === y) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

x === y ? console.log("Equal") : console.log("Not Equal");

x = 0;
console.log(x > 0 ? "positive" : x < 0 ? "negative" : "zero");
