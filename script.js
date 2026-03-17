function User(name, balance) {
    this.name = name;

    this.balance = balance;

    this.deposit = function(amount) {
        this.balance = this.balance + amount;
    };

    this.showBalance = function() {
        console.log(`${this.name} current balance: ${this.balance} USD`);
    }

    this.withdraw = function(amount) {
        if(amount > this.balance) {
            console.log("Not enough!");
            return;
        }

        this.balance -= amount;
    }
}

function Admin(name, balance, role) {
    User.call(this, name, balance);

    this.role = role;

    this.showRole = function() {
        console.log("You are", this.role);
    }

    this.showBalance = function() {
        console.log(`ADMIN balance: ${this.balance} USD`);
    }
}

const user1 = new User("Alex", 100);
const user2 = new User("Bob", 70);

user1.showBalance();
user2.showBalance();
user1.withdraw(23);
user2.withdraw(10000);

user1.deposit(50);
user2.deposit(50);

user1.showBalance();
user2.showBalance();

const userADMIN = new Admin("Alice", 4000, "superadmin");
//{}.call(User, "Alice", 4000) -> {...}.role...
userADMIN.showBalance();
userADMIN.showRole();

// prototype

// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }
//
// Car.prototype.showInfo = function() {
//     console.log("Car", this.brand, "|", this.speed);
// };
//
// Car.prototype.accelerate = function(value) {
//     this.speed += value;
// }
//
// console.log(Car.prototype);
//
// const car1 = new Car("BMW", 100);
// const car2 = new Car("Audi", 200);
//
// car1.showInfo(); // {brand, speed} -> prototype.showInfo
// car2.showInfo();
//
// car2.accelerate(20); //{brand: ""Audi", speed: 200} -> accelerate -> this.speed += 20
// car2.accelerate(30);
// car1.accelerate(50);
// car2.showInfo();
// car1.showInfo();
//
// console.log(car1.showInfo === car2.showInfo);

//[[Prototype]]
const x = {};
console.log(x); //x.[[Prototype]] -> Object.prototype

//__proto__
//object.__proto__ -> Constructor.prototype
function Car(brand) {
    this.brand = brand;
}

Car.prototype.showBrand= function() {
    console.log(this.brand);
}

// Car(function) -- prototype -- showBrand

const car1 = new Car("Toyota");
car1.showBrand();

// car1 = {} -> car1.__proto__ = Car.prototype
// Car.call(car1, "Toyota")
//return car1

// car1 -- __proto__ -- Car.prototype - (showBrand)
console.log(car1.__proto__ === Car.prototype);
console.log(car1.hasOwnProperty("showBrand"));
console.log("showBrand" in car1);


// __proto__ in objects
const vehicle = {
    type: "vehicle",
    speed: 0,
    accelerate: function(value) {
        this.speed += value;
    },
    showSpeed: function() {
        console.log(this.speed);
    }
}

const car = {
    brand: "Toyota",
    wheels: 4,
    __proto__: vehicle,
}

const superCar = {
    acceleration: 90,
    __proto__: car,
}

superCar.showSpeed();
//superCar.__proto__ -> car.__proto__ -> vehicle.__proto__ -> Object.prototype -> {}.__proto__
//car? -> __proto__ -> Object.prototype -> showSpeed ?

//GAME
function Character(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
}

Character.prototype.attack = function(target) {
    console.log(this.name + " attack " + target.name + " for " + this.damage);
}

Character.prototype.showInfo = function() {
    console.log(
        "Name: " + this.name + ", Health:" + this.health + ", Damage: " + this.damage
    );
}

function Mage(name) {
    Character.call(this, name, 80, 25);

    this.mana = 100;
}

Mage.prototype.castSpell = function(target) {
    if(this.mana < 30) {
        console.log(this.name + " has no enough mana");

        return;
    }

    this.mana -= 30;

    console.log(this.name + " casts spell on " + target.name + " for 40 ");

    target.health -= 40;
}

Mage.prototype.showInfo = function() {
    console.log(
        "Name: " + this.name + ", Health:" + this.health + ", Damage: " + this.damage + ", Mana:" + this.mana
    );
}

Mage.prototype.__proto__ = Character.prototype;

function Warrior(name) {
    Character.call(this, name, 120, 20);

    this.armor = 50;
}

Warrior.prototype.block = function() {
    this.armor -= 10;

    console.log(this.name + " decrease armor to " + this.armor);
}

Warrior.prototype.showInfo = function() {
    console.log(
        "Name: " + this.name + ", Health:" + this.health + ", Damage: " + this.damage + ", Armor:" + this.armor
    );
}

Warrior.prototype.__proto__ = Character.prototype;

const mage = new Mage("Merlin");

const warrior = new Warrior("Thor");

mage.showInfo();
warrior.showInfo();

mage.attack(warrior);
mage.castSpell(warrior);
mage.showInfo(warrior);

warrior.attack(mage);
warrior.block()

warrior.showInfo();
mage.showInfo();

// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
//
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
//
//     Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//
//     Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

//Homework
function Student(name, surname, dateOfBirth, marks) {
    this.name = name;
    this.surname = surname;
    this.dataOfBirth = dateOfBirth;
    this.marks = marks;
    this.attandance = [];
}

Student.prototype.absent = function() {
    if(this.attandance.length <= 25) {
        this.attandance.push(false);
    }
};

Student.prototype.present = function() {
    if(this.attandance.length <= 25) {
        this.attandance.push(true);
    }
};

Student.prototype.summary = function() {
    console.log(this.name, this.attandance);
};

const student1  = new Student("Alex", "Alexovich", "2010", [10, 12, 9, 11, 10]);
const student2  = new Student("Alice", "Alicovich", "2008", [10, 10, 8, 7, 6]);

student1.absent();
student2.absent();
student1.present();
student2.absent();
student1.present();
student2.present();

student1.summary();
student2.summary();