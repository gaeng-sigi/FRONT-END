const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr2 = arr.map(item => {
    return item - 1;
})
console.log(arr2); // filter map 원본은 건드리지 않는다.(비파괴)