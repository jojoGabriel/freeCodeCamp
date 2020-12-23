function toPigLatin(str) {
    let con1Pattern = /^[^aeiou]+/g;
    let con2Pattern = /^[^aeiou]+/g
    let vow1Pattern = /^[aeiou]/;
    let vow2Pattern = /^[aeiou]/;

    if (con1Pattern.test(str)) {
        let prefix = con2Pattern.exec(str)[0];
        str = str.substr(prefix.length) + prefix + "ay";

    } else if (vow1Pattern.test()) {
        str = str + "way";
    } else {
        str = str + "ay";
    }
    return str;

}

function toHogLatin(str) {
    let pattern = /^[^aeiou]+/g;
    let prefix = str.match(pattern);
    return prefix !== null
        ? str
            .replace(prefix, "")
            .concat(prefix)
            .concat("ay")
        : str.concat("way")
}

console.log(toPigLatin("rhythmic"));
console.log(toPigLatin("aeon"));


console.log(toHogLatin("rhythmic"));