function repeatString(str, num) {
    return num > 0 ? str + repeatString(str, num - 1) : "";
}

console.log(repeatString('A', 3));