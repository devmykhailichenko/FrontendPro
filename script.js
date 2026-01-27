// var let const
// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");
// let helloMessage = `Hello, ${userName}. Your age ${userAge}`;
// console.log(helloMessage);

// let a = 7;
// let b = 3;
// let result = a % b;
//
// console.log(`Result: ${result}`);
//
// console.log("Floor", Math.floor(67.4) );
// console.log("Ceil",  Math.ceil(67.4) );
// console.log("Round", Math.round(67.7) );
// console.log("Trunc", Math.trunc(67.6) );
//
// console.log(typeof 45);
// console.log(typeof "343");

// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
//
// 10369
//
// 1 0 3 6 9

// % / Math.floor
let divideNumber = 12369;

let floatNumber = divideNumber / 10000;
let d1 = Math.trunc(floatNumber);

let floatA = divideNumber / 1000;
let floatB = Math.trunc(floatA);
let d2 = floatB % 10;

let d3 = 0;
let d4 = 0;
let d5 = divideNumber % 10;

let result = `${d1} ${d2} ${d3} ${d4} ${d5}`;

console.log(result);