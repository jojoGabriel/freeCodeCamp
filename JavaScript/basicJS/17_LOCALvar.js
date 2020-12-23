var globalVar = "hello, im global";

function doSomething() {
  var globalVar = "hi, im local";
  var localVar = "howdy";
  console.log(globalVar);
  console.log(localVar);
}

doSomething();
console.log(globalVar);
// console.log(localVar);
