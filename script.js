"use strict";

let name = "Ihor";

console.log(name);

function sum(a, b) {
    console.log(a + b);
}

sum(4, 5);

function show() {
    console.log(this);
}

show();

//KISS
const arrToFilter = [2, 3, 5, 6, 1, 7, 8, 3];

//DRY Don't repeat yourself
function addTax(price) {
    return price + price * 0.2;
}

let price1 = 100;
let total1 = addTax(price1);

let price2 = 100;
let total2 = addTax(price2);

//YAGNI
//SRP
//Happy path

// Хочеться залишити рішення на майбутнє
function isEvenComplex(numbers) {
    let result = [];

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

function isEven(numbers) {
    return numbers.filter(item => item % 2 === 0);
}

console.log(
    "Function improved:", isEven(arrToFilter),
    "Function with for:", isEvenComplex(arrToFilter),
);

//Modal
const openModalBtn = document.querySelector("#open-modal-btn");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-modal-btn");

function closeModal() {
    modal.classList.remove("active");
}

openModalBtn.addEventListener("click", () => {
   modal.classList.add("active");
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", closeModal);

//Cart + Products
const products = [
    {id: 1, name: "Laptop", price: 2500},
    {id: 2, name: "Mouse", price: 700},
    {id: 3, name: "Keyboard", price: 1200},
    {id: 4, name: "Monitor", price: 8000},
    {id: 5, name: "Monitor", price: 4300},
];

// Get initial data from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.querySelector("#products-list");
const cartContainer = document.querySelector("#cart");

function renderProducts() {
    let productsHtml = "";

    products.forEach(product => {
        productsHtml += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <h3>${product.price} eur</h3>
                <button data-id="${product.id}">
                    Add to cart
                </button>
            </div>
        `;
    });

    productList.innerHTML = productsHtml;
}

function renderCart() {
    if(cart.length) {
        let cartHtml = "";

        cart.forEach(cartItem => {
            cartHtml += `
            <div class="product-card">
                <h3>${cartItem.name}</h3>
                <h3>${cartItem.price} eur</h3>
                <span>x${cartItem.amount}</span>
                <button data-id="${cartItem.id}">
                    Remove
                </button>
            </div>
        `;
        });

        cartContainer.innerHTML = cartHtml;
    }
}

cartContainer.addEventListener("click", (e) => {
    const productId = +e.target.dataset.id;

    const productInCart = cart.findIndex(product => product.id === productId);

    if(productInCart !== -1) {
        cart.splice(productInCart, 1);

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    renderCart();
});

productList.addEventListener("click", (e) => {
    const productId = +e.target.dataset.id;

    const product = products.find(product => product.id === productId);

    if(product) {
        const productInCart = cart.findIndex(product => product.id === productId);

        if(productInCart !== -1) {
            cart[productInCart].amount += 1;
        } else {
            cart.push({...product, amount: 1});
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart)); //Store the cart
    renderCart(); //Display the cart
});

renderProducts();
renderCart();

// JSON (string, number, boolean, object, array, null)
const user = {
    name: "Alice",
    age: 20,
    address: {
        street: "Street",
    }
};

const userStr = JSON.stringify(user);

console.log(userStr, typeof userStr);

console.log(
    JSON.parse(userStr)
);

const jsonData = '{"name": "Alex","age": 28,"isAdmin":true}';
const jsonArr = '["Alice", "Bob", true, false, 45, 67, [], {}, null]';

console.log(JSON.parse(jsonData));
console.log(JSON.parse(jsonArr));

// Shallow and Deep copy
const userCopy = Object.assign({}, user);
const userDeepCopy = JSON.parse(JSON.stringify(user));
const userNewDeepCopy = structuredClone(user);
//user(object) -> string -> new object

//user --------------> {name:...} userDeepCopy = user
//userDeepCopy ---> user --------------> {name: "Alex"}

user.name = "Alex";
user.address.street = "Street new";

console.log(
    "Original:", user,
    "\nCopied:", userCopy,
    "\nDeep copy:", userDeepCopy,
    "\nStructured Clone:", userNewDeepCopy
);

const arr = [1, 2, 3, [5, 6]];
const arrCopy = [...arr];
const sliceCopy = arr.slice();
const jsonArrCopy = JSON.parse(JSON.stringify(arr));
const structuredArrClone = structuredClone(arr);

arr[0] = 10;
arr[3][0] = 6;

console.log(
    "Original:", arr,
    "\nCopied:", arrCopy,
    "\nSlice copy:", sliceCopy,
    "\nJSON copy:", jsonArrCopy,
    "\nStructured Clone:", structuredArrClone
);

// WebStorages, localStorage до 10MB, sessionStorage до 10MB, cookies 4KB, IndexedDB, Cache Storage

const userName = "Bob";

sessionStorage.setItem("userName", userName); //token for payment / theme /
console.log(sessionStorage.getItem("userName"));
console.log(sessionStorage.key(0));

sessionStorage.removeItem("userName");
console.log(sessionStorage.getItem("userName"));

sessionStorage.clear();

sessionStorage.setItem("userData", JSON.stringify(user));
const userData = sessionStorage.getItem("userData");

console.log(JSON.parse(userData));
sessionStorage.clear();

const age = 56;
localStorage.setItem("userAge", String(age));
console.log(localStorage.getItem("userAge"));

//fetch