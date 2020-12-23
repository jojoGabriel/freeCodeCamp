let person = {
    name: "John",
    age: 20,
    gender: "Male",
    getAge: function() {
        return this.age;
    }
}

console.log(person.getAge());
