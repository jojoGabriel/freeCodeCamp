var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let full = firstAndLast;
    let first = full.split(" ")[0];
    let last = full.split(" ")[1];

    this.getFullName = function () {
        return full;
    };

    this.getFirstName = function () {
        return first;
    };

    this.getLastName = function () {
        return last;
    };

    this.setFullName = function (fullName) {
        full = fullName;
        first = full.split(' ')[0];
        last = full.split(' ')[1];
    }

    this.setLastName = function (lastName) {
        last = lastName;
        full = first + " " + last;
    };

    this.setFirstName = function (firstName) {
        first = firstName;
        full = first + " " + last;
    }


};

var bob = new Person('Bob Ross');
bob.getFullName();
