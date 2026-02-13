function processArray(arr, callback, logger) {
    let result = callback(arr);

    logger(result);

    return result;
}

function sum(arr) {
    let sum = 0;

    arr.forEach(function(item) {
        sum += item;
    });

    return sum;
}

function max(arr) {
    let max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

function buttonClickLog(data) {
    console.log("Sending button clicks to statistics:", data);
}

function totalResultLog(data) {
    console.log("Sending total result to statistics:", data);
}


console.log(
    processArray([5, 6, 7, 10, 3], sum, buttonClickLog),
    processArray([4, 5, 6, 7, 10, 3], max, totalResultLog),
    processArray([5, 6, 7, 10, 3], sum, totalResultLog),
);
let num = 0;

function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter, num);
    }

    return inner;
}


const counter = outer();

counter();
counter();

//
function createBankAccount(money, accountName) {
    let balance = money;
    let userName = accountName;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`${userName}'s balance after deposit:`, balance);
            },
        withdraw: function(amount) {
            balance -= amount;
            console.log(`${userName} balance after withdraw:`, balance);
        },
    };
}

let alexAccount = createBankAccount(100, "Alex");

alexAccount.deposit(100);
alexAccount.withdraw(50);

let aliceAccount = createBankAccount(400, "Alice");
aliceAccount.deposit(1000);

alexAccount.withdraw(100);

aliceAccount.withdraw(600);

//curring
const items = [
    {
        name: "Banana",
        price: 300,
        discount: 0.1,
        id: 1,
    },
    {
        name: "PC",
        price: 1000,
        discount: 0.2,
        id: 2,
    }
];

function calculateFinalPrice(discount) {
    return function(price) {
        return price * (1 - discount);
    }
}


for(let item of items) {
    console.log(
        "Item price on a screen:",
        calculateFinalPrice(item.discount)(item.price)
    );
}