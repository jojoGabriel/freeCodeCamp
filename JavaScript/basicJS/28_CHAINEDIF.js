function range(x) {
    if (x <= 10) {
        return "up to 10";
    } else if (x <= 20) {
        return "11 to 20";
    } else if (x <= 30) {
        return "21 to 30";
    } else {
        return "Greater than 30";
    }

}

console.log(11, range(11));
console.log(9, range(9));
console.log(30, range(30));
console.log(50, range(50));