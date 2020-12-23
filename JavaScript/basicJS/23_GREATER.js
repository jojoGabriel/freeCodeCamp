function GT(x, y) {
    if (x > y) {
        return "true";
    } else {
        return "false";
    }
}

function GE(x, y) {
    if (x >= y) {
        return "true";
    } else {
        return "false";
    }
}

console.log(GT(10, 7));
console.log(GT(7, '6'));
console.log(GT('6', 7));

console.log(GE(10, 10));
console.log(GE(10, '7'));
console.log(GE(10, 7));


