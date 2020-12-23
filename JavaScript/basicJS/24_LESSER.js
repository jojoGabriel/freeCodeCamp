function LT(x, y) {
    if (x < y) {
        return true;
    } else {
        return false;
    }
}

function LE(x, y) {
    if (x <= y) {
        return true;
    } else {
        return false;
    }
}

console.log(LT(5, 6));
console.log(LT(6, 5));
console.log(LT(5, '6'));
console.log(LE(6, 5));
console.log(LE(5, 5));
console.log(LE(5, '5'));