function palindrome(str) {
    // Good luck!
    let x = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
    let y = x.split("").reverse().join("");
    if (x === y) {
        return true;
    } else {
        return false;
    }
}



palindrome("A man, a plan, a canal. Panama");
