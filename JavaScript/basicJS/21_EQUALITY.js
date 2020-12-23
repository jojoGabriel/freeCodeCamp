function equal(x, y) {
    if (x == y) {
        return "equal: " + x + " " + y;
    } else {
        return "not equal: " + x + " " + y;
    }
}

function strictlyEqual(x, y) {
    if (x === y) {
        return "equal: " + x + " " + y;
    } else {
        return "not equal: " + x + " " + y;
    }
}

console.log(equal(10, 10));
console.log(strictlyEqual(10, 10));

console.log(equal(10, '10'));
console.log(strictlyEqual(10, '10'));
