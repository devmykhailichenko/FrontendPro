const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner = document.querySelector(".inner");
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
    console.log("Clicked on body");
    e.stopPropagation();
});

outer.addEventListener("click", (e) => {
    console.log("Clicked on outer");
    e.stopPropagation();
});

middle.addEventListener("click", (e) => {
    console.log("Clicked on middle");
    e.stopPropagation();
});

inner.addEventListener("click", (e) => {
    console.log("Clicked on inner");
    e.stopPropagation();
});

//----------products
const products = document.querySelector("#products");
const productInput = document.querySelector("#productInput");
const addProduct = document.querySelector("#addProduct");
const errorMessage = document.querySelector("#errorMessage");
const products_array = ["Laptop", "Phone", "Flowers", "Candy", "Boots"];

function addProductToCart(productName) {
    const item = document.createElement("div");
    item.classList.add("product");
    item.textContent = productName;

    products.append(item);
}

products_array.forEach(product => addProductToCart(product));

products.addEventListener("click", (e) => {
    // e.target.classList.toggle("product_active");
    e.target.remove();
    //Take a look on parent element
    e.stopPropagation();
});

productInput.addEventListener("input", (e) => {
    e.target.value.length < 3 ?
        errorMessage.classList.remove("disabled")
        :
        errorMessage.classList.add("disabled");
});

addProduct.addEventListener("click", (e) => {
    addProductToCart(productInput.value);
    navigator.clipboard.writeText("Hello from my website!");
    e.stopPropagation();
});


//------- navigator

console.log(window.navigator);

console.log(window.navigator.geolocation.getCurrentPosition((geolocation) => {
    console.log(geolocation);
}));

console.log(window.navigator.onLine);

const reload = document.querySelector("#reload");

reload.addEventListener("click", (e) => {
    // window.location.reload();
    // window.history.back();
    // window.history.go(-2);
    window.location.href = "https://google.com";
    // window.location.replace("https://google.com");
    //home -> contacts -> products -> cart
});

//-------------- open new window
const newWindow = document.querySelector("#newWindow");

newWindow.addEventListener("click", (e) => {
    window.open("https://www.google.com", "_blank",  "width=800,height=600");
});






