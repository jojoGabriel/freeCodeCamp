function missingChar(str) {

    for (let i = 0; i < str.length; i++) {
        let x = str.charCodeAt(i);
        console.log("curr", x, str[i]);
        if (i <= str.length - 1) {
            let y = str.charCodeAt(i + 1);
            console.log("next", y, str[i + 1]);
            if (y - x > 1) {
                return String.fromCharCode(y - 1);
            }
        }
    }
    return undefined;
}

console.log(missingChar("abce"));