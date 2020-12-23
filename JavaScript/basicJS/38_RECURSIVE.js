function sum(arr, i) {
    if (i <= 0) {
        console.log(arr[0]);
        return arr[0];
    } else {
        console.log(arr[i]);
        return arr[i] + sum(arr, i - 1);
    }
}

arr = [1, 2, 3, 4, 5];
console.log(sum(arr, arr.length - 1));