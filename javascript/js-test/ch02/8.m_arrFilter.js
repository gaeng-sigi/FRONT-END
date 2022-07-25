const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr2 = arr.filter(item => {
    return item % 2 === 0;
});

// filter을 활용하여 짝수만 담겨져 있는 배열 arr2를 만들어 주세요.

console.log(arr2);