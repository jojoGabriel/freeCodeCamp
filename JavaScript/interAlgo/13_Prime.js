function sumPrimes(num) {
    if (num <= 2) {
        return num;
    }
    let sum = 0;
    let div = []
    for (let i = 2; i <= num; i++) {
        div = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                div.push(j)
            }
        }
        if (div.length === 2) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumPrimes(10));