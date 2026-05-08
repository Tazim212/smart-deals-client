import React from 'react';

const AllProductsCard = ({ product }) => {
    const {title, price_max,price_min, status} = product
    return (
        <div className="card bg-base-100 w-70 md:w-96 mx-auto shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="badge badge-success text-gray-100">{status}</div>
                <h2 className="card-title">{title}</h2>
                <p className='text-purple-500 font-medium'>$ {price_min}-{price_max}</p>
                <button className="btn btn-outline btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default AllProductsCard;