const arr = {
    '0': 5,
    '1': 6,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    '7': 11,
    'length': 8,
    forEach: function (cb) { // () 파라미터 = 매개변수
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i);
        }
    },

    push: function (val) {
        this[this.length] = val;
        this.length++;
    }
};

arr.push(100);
console.log(arr[8]); // 100
console.log(arr.length); // 9

arr.push(200);
console.log(arr[9]); // 200
console.log(arr.length); // 10


/*
arr[0] : 5
arr[1] : 6
arr[2] : 10
arr[3] : 11
arr[4] : 22
arr[5] : 1
arr[6] : 7
*/

