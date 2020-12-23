let user = {
    name: "Jojo",
    sex: "Male",
    language: ['english', 'filipino'],
    proglang: ['javascript', 'java', 'python'],
    family: {
        spouse: "Joy",
        children: ["Jonel", "Jahna"]
    }
}

user.proglang.push('c');
console.log(user);