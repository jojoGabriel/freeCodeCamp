function allEven(arr) {
    return arr.every(i => i % 2 === 0);
}

let x = [1, 2, 3, 4, 5];
let y = [2, 4, 6, 8, 10];

console.log(allEven(x));
console.log(allEven(y));
