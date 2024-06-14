function count(a, b) {
  let i = a;
  const intervalId = setInterval(function () {
    console.log(i);
    if (i === b) {
      clearInterval(intervalId);
    }
    i++;
  }, 1000);
}

count(5, 15);