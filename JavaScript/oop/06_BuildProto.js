function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("slurp");
    },
    describe: function () {
        console.log("Name " + this.name + "\n" + "Legs: " + Dog.prototype.numLegs);
    }
};

let guard = new Dog("Guard");
guard.eat();
guard.describe();
console.log(Dog.prototype.isPrototypeOf(guard));
