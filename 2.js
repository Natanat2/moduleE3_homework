function simpleNum(num) {
  if (num < 2) {
    return console.log("Число должно быть больше 1");
  } else if (num > 1000) {
    return console.log("Число должно быть меньше 1000");
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return console.log("не простое");
      }
    }
    return console.log("простое");
  }
}

// for (let i = 2; i < 30; i++) {
//   console.log(`число ${i}: ${simpleNum(i)}`);
// }

simpleNum(5)