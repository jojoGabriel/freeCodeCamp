
// old version ES5
const person = {
    name: "Jacob",
    age: 0,
    setAge: function (age) {
        this.age = age;
    }
}
person.setAge(20);
console.log(person.age);

// in ES6
const patient = {
    name: "Jacob",
    age: 0,
    setAge(age) {
        this.age = age;
    }
}

patient.setAge(25);
console.log(patient.age);