// let arr = [1, 2, 3, 4];

// let sqr = arr.map(i => i * i);

// console.log(sqr);

let arr = [1, 2, 3, 4];
Array.prototype.sqr = function (callback) {
    var newArr = [];
    this.forEach(i => newArr.push(callback(i)));
    return newArr;
}

let revArr = arr.sqr(function (item) {
    return item * item;
});

console.log(revArr);
