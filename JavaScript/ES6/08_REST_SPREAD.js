const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4, 5));

const arr = [10, 30, 20];
const max = Math.max(...arr);
console.log(max);

// will throw error
// const expanded = ...arr;