let menu = '햄버거';

function order(request, cb) {
    console.log(`${request} 주문을 하셨습니다.`);
    setTimeout(() => { cb(request) }, 3000); // { } return이 생략.
}

function callback(response) {
    console.log(`주문하신 ${response}가 나왔습니다.`);
}

order(menu, callback);