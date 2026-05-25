// eslint-disable-next-line no-unused-vars
import React, { use, useEffect, useState } from 'react';
import AllProductsCard from './AllProductsCard';

// const productData = fetch("http://localhost:5000/allproducts").then(res => res.json())

const AllProducts = () => {
    // const allProducts = use(productData)
    const [products, setProducts] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() =>{
        fetch(`http://localhost:5000/allproducts?search=${search}`)
        .then(res =>res.json())
        .then(data =>{
            setProducts(data)
        })
    }, [search])

    return (
        <div>
            <div className='my-5 mx-5 flex flex-col md:flex-row justify-between items-center'>
                <h3>Total Products: {products.length}</h3>
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="Type here" className="input my-2 md:my-0" />
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products.map(product => <AllProductsCard key={product._id} product={product}></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;