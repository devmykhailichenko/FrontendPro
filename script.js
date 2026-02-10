// Function Declaration && Function Expression
function sayHello(name, surname, age) {
    if(typeof name === 'string') {
        console.log("Hello", name, surname, age);
    } else {
        console.log("It's not a STRING!");
    }
}

function sayBye() {
    console.log("Bye");
}

sayHello("Alex", "Stepananko", 78);

sayBye();
// global function block

function addNumbers(number1, number2) {
    return number1 + number2;
}

let result = addNumbers(4, 5);

console.log("Result from global:", result);

console.log(
    result / 4
);

function calculate(number1, number2, operator) {
    if(typeof number1 === 'number' && typeof number2 === 'number') {
        switch (operator) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;
            default:
                return "Wrong operator";
        }
    } else {
        return "Two arguments should be numbers!";
    }
}

let calculateResult = calculate(4, "2323", "6");
console.log("Result after calculations:", calculateResult);

//Function expression
const sayHello2 = function (name, surname) {
    console.log("Hello 2", name, surname);
};

sayHello2("Alex", "Stepananko");

//--------
const numbers = [1, 2, 3, 6, 8, 3, 5, 6, 10];

const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(doubledNumbers);

const evenNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log("For:", evenNumbers);

const evenNumbers2 = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log("Filter:", evenNumbers2);




function addOne(x) {
    x += 1;
    console.log("Inside function:", x);
}

let a = 4;
addOne(a);

console.log("Outside the function", a);

function changeName(user) {
    const userCopy = Object.assign({}, user);
    userCopy.name = "Bob";
    userCopy.address.street = "Square 2";

    console.log("Inside function:", userCopy);
}

const person = {name: "John", address: {street: "Square 1"}};

changeName(person);

console.log("Outside the function", person);

const numbers2 = [1, 2, 3, 4, 5];
const numbersCopy = numbers2.slice();
numbersCopy[1] = 1212;

console.log(numbers2, numbersCopy);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//     Вихідний рядок та символи для видалення задає користувач.

function removeFromArray(str, arrayToDelete) {
    let newStr = "";

    for(let j = 0; j < arrayToDelete.length; j++) {
        for(let i = 0; i < str.length; i++) {
            if(str[i] !== arrayToDelete[j]) {
                newStr += str[i];
            }
        }
    }

    //replace replaceAll -> для str !!!!
    return newStr;
}

console.log(
    removeFromArray("Hello", ['e', 'H'])
);

const arr = [1, 2, 34, true, "hsdsd", NaN];
function average(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
        }
    }

    //filter reduce
    return sum;
}

console.log(average(arr));

//

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    //....
}

console.log(removeElement(array, 4)); // Результат: [1, 3, 6, 2, 5, 7]