var Animal = function (kind) {
    this.kind = kind;
}

var pet = new Animal("Dog");
console.log(pet.kind);


// new way
class Nation {
    constructor(name) {
        this.name = name;
    }
}

const usa = new Nation("USA");
console.log(usa.name);
