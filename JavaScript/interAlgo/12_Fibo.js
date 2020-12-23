function sumFibs(num) {
    let prev = 0;
    let next = 1;
    let temp = 0;
    let sum = 0;
    while (next <= num) {
        if (next % 2 !== 0) {
            sum = sum + next;
        }
        temp = prev + next;
        prev = next;
        next = temp;
    }

    return sum;
}

console.log(sumFibs(4));
