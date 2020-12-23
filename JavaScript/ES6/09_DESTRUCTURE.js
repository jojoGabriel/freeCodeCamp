const person = {
    name: "John Smith",
    age: 25
}

let name = person.name;
let age = person.age;

console.log(name, " ", age);

// destructuring an object
const customer = {
    fullName: "Jane Plain",
    years: 30,
    sex: "Female"
}

const { fullName, years } = customer;
console.log(fullName, " ", years);

const { fullName: custName, years: custAge } = customer;
console.log(custName, " ", custAge);


// destructuing nested object
const user = {
    admin: {
        name: "John",
        email: "john@freelance.dev"
    }
}

const { admin: { name: adminName, email: adminMail } } = user;
console.log(adminName, " ", adminMail);

// desructuring assignment from arrays
const [i, j] = [1, 2, 3];
console.log(i, j);

// skipping
const [x, y, , , z] = [5, 6, 7, 8, 9];
console.log(x, y, z);

// switch variable
let m = 10, n = 20;
[n, m] = [m, n];
console.log(m, n);

// rest parameter
const arg = [1, 2, 3, 4, 5];
const [r, s, ...arr] = arg;
console.log(arr);

// destructure an object as function parameter
const lang = {
    backEnd: "Java",
    dbms: "MySQL",
    frontEnd: "JavaScript",
    dataScience: "Python"
};

const fullStack = ({ frontEnd, backEnd }) => frontEnd + " " + backEnd;
console.log(lang);
console.log(fullStack(lang));

