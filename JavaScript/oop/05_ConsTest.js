function Bird(name) {
    this.name = name;
}

let parrot = new Bird("Snitch");

if (parrot.constructor === Bird) {
    console.log("It's a bird");
}