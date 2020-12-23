function mutation(arr) {
    let x = Array.from(arr[0].toLowerCase());
    let y = Array.from(arr[1].toLowerCase());

    let contain = true;
    for (let i = 0; i < y.length; i++) {
        if (x.indexOf(y[i]) == -1) {
            contain = false;
            break;
        }
    }
    return contain;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));