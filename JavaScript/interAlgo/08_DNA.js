function pairElement(str) {
    let letters = str.split("");
    let pairs = [];

    for (let i = 0; i < letters.length; i++) {
        switch (letters[i]) {
            case "A":
                pairs.push(["A", "T"]);
                break;
            case "T":
                pairs.push(["T", "A"]);
                break;
            case "C":
                pairs.push(["C", "G"]);
                break;
            case "G":
                pairs.push(["G", "C"]);
                break;
        }
    }
    return pairs;
}

console.log(pairElement("GCG"));
