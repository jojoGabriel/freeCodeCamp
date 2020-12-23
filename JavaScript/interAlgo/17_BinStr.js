function binaryAgent(str) {
    let bins = str.split(" ");
    let english = "";
    for (let bin of Object.values(bins)) {
        english += String.fromCharCode(parseInt(bin, 2));
    }
    console.log(english);
    return english;
}

function binaryFunc(str) {
    return String.fromCharCode(
        ...str.split(" ").map(binStr => {
            return parseInt(binStr, 2);
        })
    );
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(binaryFunc("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));