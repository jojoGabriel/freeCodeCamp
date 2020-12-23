function Person() {
    let age = 0;

    this.setAge = function (newAge) {
        age = newAge;
    }

    this.getAge = function () {
        return age;
    }
}

let p = new Person();
p.setAge(25);
console.log(p.getAge());
p.age = 27;
console.log(p.getAge());
console.log(p.age);