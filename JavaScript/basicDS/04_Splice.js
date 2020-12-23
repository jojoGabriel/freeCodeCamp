let arr = ['it', 'is', 'a', 'great', 'day', 'today'];

console.log(arr);
let removed = arr.splice(0, 3);
console.log(removed);
console.log(arr);
arr.splice(2, 1, "to", "live");
console.log(arr);

