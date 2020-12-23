function Cat(name) {
    this.name = name;
    Cat.prototype.numLegs = 4;
}

let felix = new Cat("Felix");
let garfield = new Cat("Garfield");

console.log(felix.numLegs);
console.log(garfield.numLegs);

let proto = [];
let own = []
for (let p in felix) {
    if (felix.hasOwnProperty(p)) {
        own.push(p);
    } else {
        proto.push(p);
    }
}
console.log(proto);
console.log(own);