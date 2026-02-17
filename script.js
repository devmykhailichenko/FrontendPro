function show() {
    console.log(this);
}

window.show();

const user = {
    name: 'John',
    age: 25,
    showInfo: () => {
        console.log("Arrow function ->", this);
    }
};

user.showInfo();

//Стрілкові ф-ції
//Не мають ThisBinding (не мають власного this)
//Не маєють arguments

const myArrowFunction = () => {
    let x = 10;
    console.log("Hello");
};

const arr = [1, 2, 3, 4, 1, 4, 6, 8, 10];

const filteredArray = arr.filter((item) => item < 8);

console.log(filteredArray);

//
let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step += 1;
        console.log(this.step);
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step -= 1;
    },
    showStep: function () { // показує поточну сходинку
        console.log("Current step:", this.step);
    }
};

ladder.up();

ladder.up();

ladder.down();

ladder.showStep();

//ladder.up().up().down().showStep();
//{step: 0, up: function}.up() -> {}.up() -> {} -> {}.down ->

