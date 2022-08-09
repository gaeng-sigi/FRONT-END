function fn() {
    new Promise((resolve, reject) => {
        console.log('하나');
        console.log(aaa);
        resolve();
    })
    
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('둘');
                resolve();
            }, 0);
        });
    })

    .catch(err => {
        console.log('1번 에러 발생');
    })
    .then(() => {
        console.log('셋');
    }, () => {
        console.log('1-2 사이 에러 발생');
    })
    .catch(err => {
        console.log('2번 에러 발생');
    })
    .finally(() => {
        console.log('마무리');
    })
}
fn();