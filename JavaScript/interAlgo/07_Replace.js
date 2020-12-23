function myReplace(str, before, after) {
    let idx = str.indexOf(before);
    let first = "";
    if (before[0] == before[0].toUpperCase()) {
        first = after.charAt(0);
        after = first.toUpperCase().concat(after.substring(1));
    } else {
        first = after.charAt(0);
        after = first.toLowerCase().concat(after.substring(1));
    }
    str = str.substring(0, idx) + after + str.substring(idx + before.length);
    return str;
}


console.log(myReplace("He is sleeping on the couch", "sleeping", "sitting"));
