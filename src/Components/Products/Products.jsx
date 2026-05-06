import React, { use } from 'react';
import ProductsCard from './ProductsCard';
import { Link } from 'react-router';
const products = fetch("http://localhost:5000/product").then(res =>res.json())
const Products = () => {

    const productData = use(products);

    console.log(productData)
    return (
        <div className='my-5'>
            <h1 className='font-bold text-3xl text-center'>Recent Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-6'>
                {
                    productData.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
            <div className='text-center'>
                <Link to="/allproducts"><button className='btn btn-soft btn-secondary my-5'>Show All</button></Link>
            </div>
        </div>
    );
};

export default Products;