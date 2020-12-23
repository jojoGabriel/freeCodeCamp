let i = "script"

function letItBe() {
    let i = "function"
    for (let i = 0; i < 2; i++) {
        console.log("in for ", i);
    }
    console.log("in func ", i);
}

letItBe();
console.log("in script ", i);