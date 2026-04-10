import { getProductById } from "./products.js";

export const cart = [];

export function addToCart(productId) {
    const product = getProductById(productId);

    if (product) {
        cart.push(product);
    }
}

export function getCartTotal() {
    let total = 0;

    cart.forEach(function(product) {
        total += product.price;
    });

    return total;
}
