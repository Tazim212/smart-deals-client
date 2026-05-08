import React, { use, useState } from 'react';
import AllProductsCard from './AllProductsCard';

const productData = fetch("http://localhost:5000/allproducts").then(res => res.json())

const AllProducts = () => {
    const allProducts = use(productData)

    const [title, setTitle] = useState([])

    const handleSearch = e =>{
        const search = e.target.value;
        console.log(search)
    }
    // console.log(allProducts)
    return (
        <div>
            <div className='my-5 mx-5 flex justify-between items-center'>
                <h3>Total Products: {allProducts.length}</h3>
                <input onChange={handleSearch} type="text" name="search" placeholder="Type here" className="input" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    allProducts.map(product => <AllProductsCard key={product._id} product={product}></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;