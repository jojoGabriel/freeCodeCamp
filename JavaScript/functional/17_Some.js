function anyEven(arr) {
    return arr.some(i => i % 2 === 0);
}

let x = [1, 2, 3, 4, 5];
let y = [2, 4, 6, 8, 10];

console.log(anyEven(x));
console.log(anyEven(y));
