function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    console.log('Hello, my name is ', this.name);
}

const user1 = new User('John');
// {}.User() -> {name: 'John', __proto__ --> User.prototype}

user1.sayHello();

// class
class UserClass {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('Hello, my name is ', this.name);
    }
}

const user2 = new UserClass('Alice');
user2.sayHello();

// inheritance

class Animal {
    #energy;

    constructor(name) {
        this.name = name;

        this.#energy = 100;
    }

    get energy() {
        return this.#energy;
    }

    set energy(value) {
        if(value < 0) {
            console.log("Energy cannot be less than 0");
            return;
        } else {
            this.#energy = value;
        }
    }

    sayName() {
        console.log('My name is ', this.name);
    }

    eat() {
        this.#energy += 10;
        console.log(this.name + " eats...");
    }

    makeSound() {
        console.log(this.name + " makes sound...");
    }

    _descreaseEnergy() {
        if(this.#energy > 10) {
            console.log("Decreasing energy for ", this.name);
            this.#energy -= 10;
        } else {
            console.log("Energy is the same. It's low..");
        }
    }

    move() {
        this._descreaseEnergy();
        console.log(this.name + " moves...");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Animal.call(this, name)
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " barks!");
    }

    sayName() {
        super.sayName();
        console.log("I'm a dog!");
        super._descreaseEnergy();
    }

    makeSound() {
        super.makeSound();
        console.log("barks!");
    }
}

const dog1 = new Dog("Bob", "Вівчарка");
//{}.Animal -> {name: "Bob"}.Dog -> {name: "Bob", breed: "Breed", __proto__ ---> Animal.prototype}
dog1.sayName();
dog1.eat();
dog1.bark();
dog1._descreaseEnergy();
console.log(dog1.energy);
dog1.energy = -1;
dog1.energy = 1000;
console.log(dog1.energy);
// Encapsulation public private protected
// get set

// Static method
class Person {
    static count = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;

        Person.count++;
    }

    present() {
        console.log("I'm", this.age, this.name);
    }

    static isAdult(age) {
        return age >= 18;
    }

    //fabric
    static createGuest() {
        return new Person("Guest", 0);
    }
}

const user_1 = new Person('John', 40);
const user_2 = new Person('Anna', 15);

user_1.present();
user_2.present();

console.log(Person.isAdult(user_2.age));
console.log(Person.isAdult(80));

const guestPerson = Person.createGuest();
console.log(guestPerson);

// Rooms
class Room {
    static hotelName = "Sunrise Hotel";

    static nextRoomNumber = 1;

    #roomNumber;
    #isBooked;

    constructor(type, pricePerNight) {
        this.type = type;

        if(Room.isValidPrice(pricePerNight)) {
            this.pricePerNight = pricePerNight;
        } else {
            this.pricePerNight = 100;
        }

        this.#roomNumber = Room.generateRoomNumber();

        this.#isBooked = false;
    }

    get roomNumber() {
        return this.#roomNumber;
    }

    get isBooked() {
        return this.#isBooked;
    }

    static isValidPrice(price) {
        return typeof price === 'number' && price > 0;
    }

    static generateRoomNumber() {
        const roomNumber = Room.nextRoomNumber;
        Room.nextRoomNumber++;
        return roomNumber;
    }

    book() {
        if(this.#isBooked) {
            console.log(`This room (${this.#roomNumber}) is booked!`);
            return;
        } else {
            this.#isBooked = true;
            console.log(`Room (${this.#roomNumber}) is booked successfully!`);
        }
    }

    cancelBooking() {
        if(!this.#isBooked) {
            console.log(`This room ( ${this.#roomNumber} ) isn't booked!`);
        } else {
            this.#isBooked = false;
            console.log(`Room (${this.#roomNumber}) freed successfully!`);
        }
    }

    showInfo() {
        console.log("Hotel ", Room.hotelName);
        console.log("Room number ", this.#roomNumber);
        console.log("Room type ", this.type);
        console.log("Price per night ", this.pricePerNight);
    }
}

class LuxuryRoom extends Room {
    constructor(pricePerNight, hasSeaView) {
        super("Luxury", pricePerNight);
        this.hasSeaView = hasSeaView;
    }

    orderBreakfast() {
        console.log("You ordered the breakfast for ", this.roomNumber);
    }

    showInfo() {
        super.showInfo();

        console.log("Sea view:", this.hasSeaView ? "yes" : "no");
    }
}

const room_1 = new Room("Standart", 2500);
room_1.showInfo();
room_1.book();
room_1.cancelBooking();

const luxuryRoom_1 = new LuxuryRoom(10000, true);
luxuryRoom_1.showInfo();
luxuryRoom_1.book();
luxuryRoom_1.orderBreakfast();
luxuryRoom_1.cancelBooking();

console.log(Room.isValidPrice(8000));
console.log(Room.nextRoomNumber);