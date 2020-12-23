function titleCase(str) {
    let words = str.split(" ");
    let newStr = "";
    let word = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 1) {

            word = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        } else {
            word = words[i].toUpperCase();
        }
        newStr = newStr + word + " ";
    }

    return newStr.trim();
}

console.log(titleCase("I'm a little tea pot"));