function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((x, y) => x - y);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
