const arr = {
    '0': 5,
    '1': 6,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    'length': 7,
    forEach: function (aaaa) { // () 파라미터 = 매개변수
        aaaa(234);
    }
};

console.log('------------');
arr.forEach(item => {
    console.log(item + 12);
});
console.log('------------');
console.log('arr.length: ' + arr.length);

function sum(n1, n2) {
    console.log(n1 + n2);
}
sum(10, 20);

const sum2 = function (n1, n2) {
    console.log(n1 + n2);
}
sum2(100, 200);