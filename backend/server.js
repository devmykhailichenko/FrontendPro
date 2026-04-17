import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 50000
    },
    {
        id: 2,
        title: "Phone",
        price: 3000
    },
    {
        id: 3,
        title: "TV",
        price: 4000
    },
];

server.get("/products", (request, response) => {
    response.json(products);
});

server.post("/products", (request, response) => {
    const { title, price } = request.body;

    if(!title || !price) {
        return response.status(400).json({
            message: "One of the fields is missing!"
        });
    }

    const existingProduct = products.find((product) => {
        return product.title.toLocaleLowerCase() === title.toLocaleLowerCase();
    });

    if(existingProduct) {
        return response.status(409).json({
            message: "Product with this title is already exist!"
        });
    }

    const newProduct = {
        title,
        price,
        id: products.length + 1,
    };

    products.push(newProduct);

    response.status(201).json({
        message: "Product created successfully",
        products: newProduct,
    });
});

server.put("/products/:id", (request, response) => {
    const productId = +request.params.id;

    const productToChange = products.find((product) => product.id === productId);

    if(!productToChange) {
        return response.status(404).json({
            message: "Product with this id does not exist!"
        });
    }

    //???
    if(!request.body) {
        return response.status(400).json({
            message: "Body is missing!"
        });
    }

    const keysToChange = Object.keys(request.body);
    for(let i = 0; i < keysToChange.length; i++) {
        productToChange[keysToChange[i]] = request.body[keysToChange[i]];
    }

    response.status(200).json({
        message: "Product modified successfully!",
        product: productToChange,
    });
});

server.delete("/products/:id", (request, response) => {
    const productId = +request.params.id;

    const productIndex = products.findIndex((product) => product.id === productId);

    const deletedProduct = products.splice(productIndex, 1);

    console.log("New products list:", products, "Deleted:", deletedProduct);

    response.status(200).json({
        message: "Product deleted successfully!",
        product: deletedProduct,
    });
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});