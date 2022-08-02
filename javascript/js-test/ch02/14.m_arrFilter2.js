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
    },

    filter: function (cb) {
        const tempArr = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i)) {
                tempArr.push(this[i]);
            }
        }
        return tempArr;
    }
};

const arr2 = arr.filter((item, idx) => {
    return item % 2 === 0;
});

console.log(arr2); //[ 6, 10, 22 ]



/*
arr[0] : 5
arr[1] : 6
arr[2] : 10
arr[3] : 11
arr[4] : 22
arr[5] : 1
arr[6] : 7
*/

