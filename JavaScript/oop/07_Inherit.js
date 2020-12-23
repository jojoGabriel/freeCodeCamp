function Animal() { };

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("slurp");
    }
}

let animal = Object.create(Animal.prototype);
animal.eat();

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
let gs = new Dog('German Shepherd');
gs.eat();

console.log(Dog.prototype.constructor);
Dog.prototype.constructor = Dog;
console.log(Dog.prototype.constructor);

Dog.prototype.bark = function () {
    console.log("bow wow");
}

gs.bark();

Dog.prototype.eat = function () {
    console.log("nom");
}

gs.eat();