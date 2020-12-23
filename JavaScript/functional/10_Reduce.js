let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.filter(even).reduce(total)
    / arr.filter(even).length);

function total(sum, nbr) {
    return sum + nbr;
}

function even(item) {
    return item % 2 === 0;
}

