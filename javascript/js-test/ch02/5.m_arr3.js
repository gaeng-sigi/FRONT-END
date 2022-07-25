const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];


// forEach 문을 활용하여 밑 내용과 똑같이 찍어주세요.

/*
arr[0] : 11
arr[1] : 22
arr[2] : 33
arr[3] : 44
arr[4] : 55
arr[5] : 66
arr[6] : 77
arr[7] : 88
arr[8] : 99
*/

arr.forEach((item, idx) => { // item : 값, idx : 자리
    console.log(`arr[${idx}] : ${item}`);
})

