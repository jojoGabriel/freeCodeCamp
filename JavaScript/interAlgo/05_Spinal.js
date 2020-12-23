function spinalCase(str) {
    // space and underscore
    let regex = /\s+|_+/g;

    // insert space between lower and upper
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    return str.replace(regex, "-").toLowerCase();
}

let str = spinalCase('thisIsSpinalTap');
console.log(str);
