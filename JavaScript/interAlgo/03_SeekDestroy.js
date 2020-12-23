function destroyer(arr) {
    // Remove all the values
    let args = Array.prototype.slice.call(arguments);
    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (args[i] === arr[j]) {
                delete arr[j];
            }
        }
    }
    return arr.filter(Boolean);
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
