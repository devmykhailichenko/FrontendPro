//setTimeout clearTimeout

const loadDataBtn = document.querySelector("#loadDataBtn");
const statusText = document.querySelector("#status");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const counter = document.querySelector("#counter");

loadDataBtn.addEventListener("click", () => {
    statusText.textContent = "Loading...";

    setTimeout(() => {
        statusText.textContent = "Data loaded successfully!";
    }, 2000)
})

//setInterval clearInterval
let count = 0;
let intervalId = 0;

startBtn.addEventListener("click", () => {
    if(!intervalId) {
        intervalId = setInterval(() => {
            count++;
            counter.textContent = `${count}`;
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});

// console.log(1);
// console.log(2);
//
// setTimeout(()=>{
//     console.log(0)
// }, 0);
//
// console.log(3);

// Event Loop example

console.log("1. Start");

function syncFn() {
    console.log("2. syncFn start");

    const a = 10;
    const b = 29;

    const sum = a + b;

    console.log("3. Sum:", sum);

    return sum;
}

const result = syncFn();

console.log("4. result = ", result);

setTimeout(() => {
    console.log("5. setTimeout callback")
}, 0);

setTimeout(() => {
    console.log("5*. setTimeout callback")
}, 0);

setTimeout(() => {
    console.log("6. setTimeout callback 1 second")
}, 1000);


console.log("7. End!");

//01:30
//90sec ->
let timer = 90;

function formatTimer(value) {
    return "01:30";
}
