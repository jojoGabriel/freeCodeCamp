let person = {
    name: "John",
    age: 2
}

let animal = {
    name: "K9",
    legs: 4
}


let walkMixin = function (obj) {
    obj.walk = function (name) {
        console.log(name + " steps");
    }
}

walkMixin(person);
walkMixin(animal);

person.walk(person.name);
animal.walk(animal.name);
