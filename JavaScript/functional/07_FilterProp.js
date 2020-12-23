// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evens = arr.filter(i => i % 2 == 0).map(j => j * j);

// console.log(evens);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.select = function (callback) {
    var temp = [];
    this.forEach(i => {
        if (callback(i)) {
            temp.push(i);
        }
    });
    return temp;
};

var newArr = arr.select(item => {
    return item % 2 === 0;
}).map(i => i * i);

console.log(newArr);