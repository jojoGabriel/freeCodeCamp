function maxInSub(arr) {
    // You can do this!
    let largest = [];
    for (let i = 0; i < arr.length; i++) {
        let max = Number.MIN_VALUE;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        largest.push(max);
    }
    return largest;
}

let arr = maxInSub([[7, 10, 1, 5], [43, 47, 18, 36], [52, 42, 35, 39], [500, 245, 857, 1]]);
console.log(arr);