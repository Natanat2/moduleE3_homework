function someFunc(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

let a = someFunc(5);
console.log(a(10));