function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for (let i = 0; i < collection.length; i++) {
        let pass = true;
        for (var key in source) {
            if (!collection[i].hasOwnProperty(key) ||
                collection[i][key] != source[key]) {
                pass = false;
            }
        }
        if (pass) {
            arr.push(collection[i]);
        }
    }
    // Only change code above this line
    return arr;
}

let newArr = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
console.log(newArr);

function whatIsInAName2(collection, source) {
    let keys = Object.keys(source);
    return collection.filter(obj => {
        return keys.every(key => {
            return obj.hasOwnProperty(key) && obj[key] == source[key];
        })
    })
}

newArr = whatIsInAName2([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
console.log(newArr);