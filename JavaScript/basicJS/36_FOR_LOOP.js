console.log("0-4");
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log("1 3 5 7 9");
for (var i = 1; i < 10; i += 2) {
    console.log(i);
}

console.log("backwards");
for (var i = 9; i > 0; i -= 2) {
    console.log(i);
}

console.log("sum array elements");
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("sum ", sum);

console.log("multi-dimensional array");
var arr_arr = [[1, 2], [3, 4], [5, 6]];
var tot = 0;
for (var i = 0; i < arr_arr.length; i++) {
    for (var j = 0; j < arr_arr[i].length; j++) {
        tot = tot + arr_arr[i][j];
    }
}
console.log("total ", tot);