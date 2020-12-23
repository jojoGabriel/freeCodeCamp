function dropElements(arr, func) {
    // Drop them elements.
    let boo = arr.map(func);
    let idx = boo.indexOf(true);
    if (idx >= 0) {
        return arr.slice(idx);
    } else {
        return []
    }
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
