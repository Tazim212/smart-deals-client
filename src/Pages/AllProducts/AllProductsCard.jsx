import React from 'react';
import { Link } from 'react-router';

const AllProductsCard = ({ product }) => {
    const { _id, title, image, price_max, price_min, status } = product
    return (
        <div className="card bg-gray-200 w-70 md:w-96 mx-auto shadow-sm">
            <figure>
                <img
                    className='h-50 w-70 px-2 md:px-0 my-3 rounded-md'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="badge badge-success text-gray-100">{status}</div>
                <h2 className="card-title">{title}</h2>
                <p className='text-purple-500 font-medium'>$ {price_min}-{price_max}</p>
                <Link to={`/productdetails/${_id}`} className="btn btn-outline btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default AllProductsCard;