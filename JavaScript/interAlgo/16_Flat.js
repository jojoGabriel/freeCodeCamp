function steamrollArray(arr) {
    // I'm a steamroller, baby
    let flat = []

    var toFlat = function (arg) {
        if (Array.isArray(arg)) {
            arg.forEach(toFlat);
        } else {
            flat.push(arg);
        }
    }

    arr.forEach(toFlat);
    return flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
