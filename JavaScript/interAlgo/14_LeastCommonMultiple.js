function isPrime(nbr) {
    if (nbr < 2) {
        return false;
    }

    for (let i = 1; i <= nbr; i++) {
        if (i != 1 && i != nbr) {
            if (nbr % i == 0) {
                return false;
            }
        }
    }

    return true;

}

function primeFactors(factors, nbr) {

    if (nbr == 1) {
        factors.push(1);
        return;
    }
    if (isPrime(nbr)) {
        factors.push(nbr);
        return;
    }

    let factor = 2;
    while (true) {
        if (isPrime(factor) && (nbr % factor === 0)) {
            break;
        }
        factor++;
    }
    factors.push(factor);

    primeFactors(factors, nbr / factor);

}

function smallestCommons(arr) {
    arr = arr.sort((x, y) => {
        return x == y ? 0 : x > y ? -1 : 1;
    })

    let range = [];
    for (let i = arr[0]; i >= arr[1]; i--) {
        range.push(i);
    }

    let factors = {};
    for (let i = 0; i < range.length; i++) {

        let count = {};
        let primes = [];
        primeFactors(primes, range[i]);
        if (primes) {
            primes.map(i => {
                count[i] = count[i] ? count[i] + 1 : 1;
            });
        }

        let keys = Object.keys(count);
        for (let i = 0; i < keys.length; i++) {
            if (factors.hasOwnProperty(keys[i])) {
                if (count[keys[i]] > factors[keys[i]]) {
                    factors[keys[i]] = count[keys[i]];
                }
            } else {
                factors[keys[i]] = count[keys[i]];
            }
        }
    }

    let lcm = 1;
    for (const [key, value] of Object.entries(factors)) {
        lcm = lcm * Math.pow(key, value);
    }
    return lcm;
}


console.log(smallestCommons([2, 10]));
