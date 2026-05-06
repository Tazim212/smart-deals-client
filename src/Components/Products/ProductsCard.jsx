import React from 'react';

const ProductsCard = ({ product }) => {
    // console.log(product)
    const { title, price_min, price_max } = product
    return (
        <div className="card bg-base-100 w-96 mx-auto shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-purple-500 font-medium'>$ {price_min}-{price_max}</p>
                <button className="btn btn-outline btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default ProductsCard;
