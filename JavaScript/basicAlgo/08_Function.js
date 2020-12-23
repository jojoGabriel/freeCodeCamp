even = (num) => num % 2 === 0;

arr = [1, 3, 4, 7];

for (let i = 0; i < arr.length; i++) {
    console.log(even(arr[i]));
}