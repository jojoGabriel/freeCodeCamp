function validUserName(id) {
    const regexp = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
    return regexp.test(id);
}

console.log(validUserName("Jo"));
console.log(validUserName("Jo19"));
console.log(validUserName("John23"));
console.log(validUserName("1Jo"));
console.log(validUserName("J12o"));
console.log(validUserName("J1"));