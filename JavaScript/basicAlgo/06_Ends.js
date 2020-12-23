function endsWith(str, end) {

    if (str.slice(str.length - end.length) === end) {
        return true;
    }
    return false;
}

console.log(endsWith('lion', 'on'));
console.log(endsWith('bigger', 'est'));