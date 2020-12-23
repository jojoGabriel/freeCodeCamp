let words = "the quick brown fox".split(" ");
let len = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].length > len) {
        len = words[i].length;
    }
}
console.log(len);