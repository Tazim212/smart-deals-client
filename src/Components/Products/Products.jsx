import React, { use } from 'react';
const products = fetch("http://localhost:5000/product").then(res =>res.json())
const Products = () => {

    const productData = use(products);

    console.log(productData)
    return (
        <div className='my-5'>
            <h1 className='font-bold text-3xl text-center'>Recent Products</h1>
        </div>
    );
};

export default Products;