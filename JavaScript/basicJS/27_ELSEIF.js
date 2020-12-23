function testWithIf(x) {
    if (x >= 5) {
        return "greater than 5";
    }
    return "less than 5";
}

function testWithIfElse(x) {
    if (x >= 5) {
        return "greater than 5";
    } else {
        return "less than 5";
    }
}

console.log(testWithIf(4));
console.log(testWithIfElse(4));