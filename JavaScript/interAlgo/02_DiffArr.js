function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    arr1.map(i => {
        if (arr2.indexOf(i) == -1) {
            newArr.push(i);
        }
    });

    arr2.map(i => {
        if (arr1.indexOf(i) == -1) {
            newArr.push(i);
        }
    });


    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
