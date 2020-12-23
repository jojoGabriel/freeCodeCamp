function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let inner = [];
    for (let i = 0; i < arr.length; i++) {
        if (inner.length < size) {
            inner.push(arr[i]);
        } else {
            newArr.push(inner);
            inner = [];
            inner.push(arr[i]);
        }
    }
    newArr.push(inner);
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));