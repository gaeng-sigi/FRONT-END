const p1 = new Promise((resolve, reject) => { // new 나오면 객체 생성!!! return 되는 것은 객체 주소값. promise -> 콜백함수 3개.
    reject('에러 발생!');
});

p1
.then(res => {
    console.log('나는 then ' + res);
})
.catch(err => { // 생략 가능한 것은 3번째?
    console.log('나는 catch ' + err);
});
