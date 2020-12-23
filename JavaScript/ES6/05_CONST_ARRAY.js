const arr = [1, 2, 3];
// arr = [3, 1, 2]; // invalid
arr.unshift(arr.pop());  // valid
console.log(arr);

arr[2] = 6;
console.log(arr);

