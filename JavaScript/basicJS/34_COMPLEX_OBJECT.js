var person = [
    {
        name: "John",
        type: "Employee",
        salary: 100000
    },
    {
        name: "Jane",
        type: "Customer",
        credit_limit: 250000
    }
]

console.log(person[0].salary);
console.log(person[1].credit_limit);

var myOSs = {
    linux: {
        ubuntu: "Ubuntu",
        fedora: "Fedora"
    },
    windows: {
        "windows 10": "Windows 10",
        "windows 7": "Windows 7"
    }
}

console.log(myOSs.linux.fedora);
console.log(myOSs.windows["windows 10"]);