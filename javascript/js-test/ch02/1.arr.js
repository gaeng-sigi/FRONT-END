// console.log('arr.js');
// 터미널에서 ctrl + alt+ n 하면 실행 됨. code runner

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // 배열은 같은 타입으로 넣어야한다. 문자나 숫자?
/*
console.log('arr[0] : ' + arr[0]);
arr[0] = 11;
arr[0]++;
console.log('arr[0] : ' + arr[0]);
*/
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] : ${arr[i]}`);
}

// 자바스크립트는 배열에 forEach 함수가 있다.
console.log('-----------');
// arr.forEach(function (item) { function 사용할때.
    
// });

arr.forEach(item => { // arrow 사용할때. 1개 일때 item 소괄호 생략, 2개 이상 일때 (item, idx) 소괄호 해야한다.
    console.log('값: ' + item)
});
