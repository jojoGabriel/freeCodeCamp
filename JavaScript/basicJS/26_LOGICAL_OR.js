function outsideRange(x) {
    if (x < 10 || x > 20) {
        return "outside";
    } else {
        return "inside";
    }
}

console.log(outsideRange(10));
console.log(outsideRange(5));
