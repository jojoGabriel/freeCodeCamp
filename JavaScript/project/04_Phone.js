function phoneCheck(str) {
    let formats = [
        /^[0-9]{3}-[0-9]{3}-[0-9]{4}/,
        /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}/,
        /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/,
        /^[0-9]{3}\s[0-9]{3}\s[0-9]{4}/,
        /^[0-9]{10}$/,
        /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/,
        /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}/,
        /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/,
        /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}/,
    ];

    // return formats.some(regex => { return regex.test(str) });

    for (let regex of formats) {
        console.log('test', regex.test(str));
        console.log('match', str.match(regex));
    }
}

phoneCheck("(6054756961)");