function spliceElement(arr1, arr2, n) {
    // It's alive. It's alive!
    let r2 = arr2.slice(0);
    for (let i = 0; i < arr1.length; i++) {
        r2.splice(n, 0, arr1[i]);
        n++;
    }
    return r2;
}

function spreadElement(arr1, arr2, n) {
    // It's alive. It's alive!
    let r2 = arr2.slice(0);
    r2.splice(n, 0, ...arr1);
    return r2;
}

console.log(spliceElement([1, 2, 3], [4, 5, 6], 1));
console.log(spreadElement([1, 2, 3], [4, 5, 6], 1));