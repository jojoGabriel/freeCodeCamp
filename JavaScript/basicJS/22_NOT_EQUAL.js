function notEqual(x, y) {
    if (x != y) {
        return "not equal";
    } else {
        return "equal";
    }
}

function strictlyNotEqual(x, y) {
    if (x !== y) {
        return "not equal";
    } else {
        return "equal";
    }
}

console.log(notEqual(1, 1))
console.log(notEqual(1, '1'))

console.log(strictlyNotEqual(1, 1));
console.log(strictlyNotEqual(1, '1'))