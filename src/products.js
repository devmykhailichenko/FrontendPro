export const products = [
    { id: 1, name: "Ноутбук", price: 30000 },
    { id: 2, name: "Мишка", price: 800 },
    { id: 3, name: "Клавіатура", price: 1500 }
];

export function getProductById(id) {
    return products.find((product) => product.id === id);
}