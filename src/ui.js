import { products } from "./products.js";
import { addToCart, getCartTotal, cart } from "./cart.js";

const productsContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalContainer = document.getElementById("total");

export function renderProducts() {
    productsContainer.innerHTML = "";

    products.forEach(function(product) {
        const productElement = document.createElement("div");

        productElement.innerHTML = `
                <p>${product.name} - ${product.price} грн</p>
                <button data-id="${product.id}">Додати в кошик</button>
        `;

        const button = productElement.querySelector("button");

        button.addEventListener("click", () => {
            addToCart(product.id);

            renderCart();
            renderTotal();
        })

        productsContainer.appendChild(productElement);
    });
}

export function renderCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Кошик порожній</p>";
        return;
    }

    cart.forEach(function(product) {
        const cartItem = document.createElement("div");

        cartItem.innerHTML = `<p>${product.name} - ${product.price} грн</p>`;

        cartContainer.appendChild(cartItem);
    });
}

export function renderTotal() {
    const total = getCartTotal();

    totalContainer.textContent = `Загальна сума: ${total} грн`;
}