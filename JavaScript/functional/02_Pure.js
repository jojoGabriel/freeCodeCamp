var arr = [1, 2, 3];
arr.splice(1, 0, 5, 4);  // this function changes the array
console.log(arr);

var lst = [1, 2, 3];
let insert = function () {
    let newArr = [];
    newArr.push(lst[0]);
    newArr.push(5);
    newArr.push(4);
    newArr.push(...lst.slice(1, 3));
    // newArr.push(lst[2]);
    return newArr;
}

console.log(insert());
console.log(lst);

