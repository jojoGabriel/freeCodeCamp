let arr = [3, 1, 2];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("=====")
arr = [[1, 2, 3], [4, 5]]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
