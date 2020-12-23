function addTogether() {

    function isNumber(nbr) {
        if (typeof nbr === "number") {
            return nbr;
        } else {
            return undefined;
        }
    }

    let x = 0;
    let args = arguments.length;
    switch (args) {
        case 0:
            return undefined;
            break;
        case 1:
            if (isNumber(arguments[0])) {
                x = arguments[0];
                return function (y) {
                    if (isNumber(y)) {
                        return x + y;
                    } else {
                        return undefined;
                    }
                }
            } else {
                return undefined;
            }
            break;
        default:
            if (isNumber(arguments[0]) && isNumber(arguments[1])) {
                return arguments[0] + arguments[1];
            } else {
                return undefined;
            }
            break;
    }

}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2, ([3])));
