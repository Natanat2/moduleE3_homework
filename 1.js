function arrCount(array) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] != null && !isNaN(array[i])) {
      if (array[i] === 0) {
        zero++;
      } else if (array[i] % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  console.log(`четных чисел: ${even}`);
  console.log(`нечетных чисел: ${odd}`);
  console.log(`0 чисел: ${zero}`);
}

let a = [1, 3, 2, 0, 0, 8, 6, null, "1", NaN];
arrCount(a);