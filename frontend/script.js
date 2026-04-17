const BASE_URL = "http://localhost:3000";

const getProductsBtn = document.querySelector('#get-products');
const createProductBtn = document.querySelector('#create-product');
const modifyProductBtn = document.querySelector('#modify-product');
const deleteProductBtn = document.querySelector('#delete-product');

getProductsBtn.addEventListener('click', async () => {
   const response = await fetch(`${BASE_URL}/products`);
   const data = await response.json();

   console.log(data);
});

createProductBtn.addEventListener('click', async () => {
   const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         title: "New product",
         price: 43000
      }),
   });

   const data = await response.json();

   console.log(data);
});

modifyProductBtn.addEventListener('click', async () => {
   const response = await fetch(`${BASE_URL}/products/${2}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         price: 7000
      }),
   });

   const data = await response.json();

   console.log(data);
});

deleteProductBtn.addEventListener('click', async () => {
   const response = await fetch(`${BASE_URL}/products/${3}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });

   const data = await response.json();

   console.log(data);
});