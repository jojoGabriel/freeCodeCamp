var glob = 6;

function increase() {
    return glob + 1;
}

function higher(inp) {
    return inp + 1;
}

let x = increase();
let y = higher(glob);
let z = higher(6);

console.log(x, y, z);

