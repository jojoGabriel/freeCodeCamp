function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let lab = new Dog("Bro", "Yellow");

console.log(lab);
console.log((lab instanceof Dog));

let labProps = [];
for (let prop in lab) {
    labProps.push(prop);
}

console.log(labProps);