function truthOrFalse(arr) {
    let truthy = [];
    let falsy = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            truthy.push(arr[i]);
        } else {
            falsy.push(arr[i]);
        }
    }
    return [truthy, falsy];
}

console.log(truthOrFalse([
    true,
    false,
    1,
    NaN,
    undefined,
    "true",
    "false"
]));