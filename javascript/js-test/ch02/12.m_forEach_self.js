const arr = {
    '0': 5,
    '1': 6,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    'length': 7,
    forEach: function (cb) { // () 파라미터 = 매개변수
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i);
        }
    }
};

for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] : ${arr[i]}`);
}

console.log('------------');
arr.forEach((item, idx) => {
    console.log(`arr[${idx}] : ${item}`);
})


/*
arr[0] : 5
arr[1] : 6
arr[2] : 10
arr[3] : 11
arr[4] : 22
arr[5] : 1
arr[6] : 7
*/

