function ascend(arr) {
    return arr.sort((a, b) => {
        return a - b;
    });
}

function descend(arr) {
    return arr.sort((a, b) => {
        return a > b ? -1 : a < b ? 1 : 0;
    });
}

console.log(ascend([3, 2, 1]));
console.log(descend([4, 5, 6]));
