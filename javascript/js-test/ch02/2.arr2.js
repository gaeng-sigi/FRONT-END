const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const fnPrint = item => {
    console.log("값: " + item);
};

for (let i = 0; i < arr.length; i++) {
    fnPrint(arr[i]);
}
