const squareList = (arr) => {
    // only change code below this line
    let sqr = arr.filter(i => Number.isInteger(i) && i > 0)
        .map(i => i * i);
    return sqr;
    // only change code above this line
};

// test your code
const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
