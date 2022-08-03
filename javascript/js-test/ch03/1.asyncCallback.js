[1, 2, 3].forEach(num => { // num부터 첫번째 콜백함수
    mySetTimeout(() => { // ()부터 두번째 콜백함수
        console.log(num);
    }, 4000);
});

function mySetTimeout(cb, time) {
    const start = Date.now();
    let now = start;
    while (now - start < time) {
        now = Date.now();
    }
    cb();
}