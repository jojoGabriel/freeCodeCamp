function rot13(str) {
    let decode = "";
    let letters = str.split("");
    for (let i = 0; i < letters.length; i++) {
        let encoded = letters[i].charCodeAt(0);
        if (encoded >= 65 && encoded <= 90) {
            let decoded = 0;
            if (encoded - 13 < 65) {
                decoded = 90 - (13 - (encoded - 65)) + 1;
            } else {
                decoded = encoded - 13;
            }
            letters[i] = String.fromCharCode(decoded);

        }
    }
    return letters.join('');
}

rot13('SERR PBQR');