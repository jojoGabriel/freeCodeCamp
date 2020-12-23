function convertToRoman(num) {
    var decVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romVal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let i = 0;
    let rom = "";
    while (i < decVal.length) {
        while (decVal[i] <= num) {
            rom += romVal[i];
            num -= decVal[i];
        }
        i++;
    }
    return rom;
}

console.log(convertToRoman(39));