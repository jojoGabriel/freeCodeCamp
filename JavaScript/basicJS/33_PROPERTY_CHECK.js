var person = {
    name: "John",
    age: 23
}

if (person.hasOwnProperty("name")) {
    console.log(person.name);
}

if (person.hasOwnProperty("birthdate")) {
    console.log(person.birthdate);
} else {
    console.log("birthdate not found");
}