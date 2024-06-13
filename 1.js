function countOddEven (array) {
    let even = 0
    let odd = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even += 1;
        } else if (array[i] % 2 === 1) {
            odd += 1;
        }
    }
    console.log('кол-во четных чисел', even)
    console.log('кол-во нечетных чисел', odd)
}

countOddEven([1,2,4,5,6,4,8,0])