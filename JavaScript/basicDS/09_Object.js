let camp = {
    attendee: "James",
    age: 23,
    language: "English"
}

let i = camp.age;
let name = camp['attendee'];
camp['city'] = 'Chicago';

console.log(name, camp.city, i);
