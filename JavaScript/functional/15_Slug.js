// the global variable
var title = " Winter Is  Coming";

// Add your code below this line
function toSlug(title) {
    return title
        .trim()
        .split(" ")
        .filter(i => i != "")
        .map(i => i.toLowerCase())
        .join("-");

}
// Add your code above this line

console.log(toSlug(title)); // Should be "winter-is-coming"

