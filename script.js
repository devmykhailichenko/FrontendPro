// call apply bind
const users = [
    {
        name: "Alex",
        surname: "Alexenko",
    },
    {
        name: "Alice",
        surname: "Alisenko",
    },
    {
        name: "Bob",
        surname: "Bobenko",
    },
    {
        name: "Ihor",
        surname: "Ihor",
    }
];

function showInfo(greetings, ending) {
    console.log(greetings + this.name + " " + this.surname + ending);
}

users.forEach((user) => {
    showInfo.call(user, "Hello, ", " Bye-bye");
});

console.log("------------------");

for(let i = 0; i < users.length; i++) {
    showInfo.apply(users[i], ["Hello, ", " Bye-bye"]);
}

console.log("------------------");

const obj = {
    name: "Alex",
    surname: "Alexenko",
};

const showObjInfo = showInfo.bind(obj, "Hello, ", " Bye-bye");

showObjInfo();
showObjInfo();

// Рекурсія
function factorial(n) {
    let result = 1;

    for(let i = n; i >= 2; i--) {
        result *= i;
    }

    return result;
}

console.log(
    factorial(5), factorial(4)
);

function factorialRecursive(n) {
    if(n === 1) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

console.log(
    factorialRecursive(5), factorialRecursive(4)
);

//f(5) -> 5 * f(4) -> 5 * 4 * f(3) -> 5 * 4 * 3 * f(2) -> 5 * 4 * 3 * 2 * f(1) -> 5 * 4 * 3 * 2 * 1
//return 5 * return 4 * return 3 ....
//tree

const university = {
  frontend: [
      {name: "Alex"},
      {name: "Alice"}
  ],
  backend: {
      java: [
          {name: "Bob"},
          {name: "Maria"}
      ],
      python: [
          {name: "Oleksandr"},
          {name: "Olga"}
      ]
  }
};

function countStudents(department) {
    if(Array.isArray(department)) {
        return department.length;
    }

    let total = 0;

    for(let key in department) {
        total += countStudents(department[key]);
    }

    return total;
}

console.log(
    countStudents(university)
);

// For homework
let company = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 600 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};

console.log("------------------");

// Constructors (Functions)
function User(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

const firstUser = new User("Alex", "Ales", 30);
console.log(firstUser);

// {}.User() -> {name: surname: age:}

// Розкоментуйте, якщо не боїтесь prompt :) ->
// function Car(brand, year) {
//     this.brand = brand;
//     this.year = year;
//
//     this.getInfo = function () {
//         console.log("Brand:", this.brand, "Year:", this.year);
//
//         return "Brand: " + this.brand + " Year: " + this.year;
//     }
// }
//
// const cars = [];
//
// for(let i = 0; i < 2; i++) {
//     const brand = prompt("Enter cars brand");
//     const year = prompt("Enter cars year");
//
//     const newCar = new Car(brand, year);
//
//     cars.push(newCar);
// }
//
// cars.forEach(car => car.getInfo());

// const carsContainer = document.querySelector("#cars");
//
// cars.forEach(car => {
//     const carDiv = document.createElement("div");
//     carDiv.innerText = car.getInfo();
//
//     carsContainer.appendChild(carDiv);
// });


//get set в Object; object/array copy; rest spread -> next; arguments + ...args