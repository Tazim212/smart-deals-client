import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const productDetails = useLoaderData()

    console.log(productDetails)

    const { _id, title, price_min, price_max, description, created_at, location, seller_name, seller_contact, email, status } = productDetails
    return (
        <div className='my-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4 mx-50'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Product Description</h2>
                        <div className='flex justify-around items-center -ml-8'>
                            <h3 className='font-bold'>Condition : <span className='text-purple-500'>New</span></h3>
                            <h3 className='font-bold'>Usage Time : <span className='text-purple-500'>3 Month</span></h3>
                        </div>
                        <div className="divider"></div>
                        <p>{description}</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <div className="badge badge-soft badge-primary my-2">Art & Hobbies</div>
                    <div className='bg-gray-200 py-2.5 px-3 rounded my-5'>
                        <p className='text-green-700 text-xl font-bold'>$ {price_min} - {price_max}</p>
                        <span>Price starts from</span>
                    </div>
                    <div className='bg-gray-200 py-2.5 px-3 rounded my-5'>
                        <h1 className='text-xl font-bold'>Product Details</h1>
                        <p className='text-md'>Product ID: {_id}</p>
                        <span>Posted: {created_at}</span>
                    </div>
                    <div className='bg-gray-200 py-2.5 px-3 rounded my-5'>
                        <h1 className='text-md font-bold'>{seller_name}</h1>
                        <span>{email}</span>
                        <p className='text-md'>Location: {location}</p>
                        <p className='text-md'>Contact: {seller_contact}</p>
                        <p>Status: <div className="badge badge-warning font-semibold">{status}</div></p>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;

// category
// :
// "Electronics"
// condition
// :
// "fresh"
// created_at
// :
// "2026-05-01T08:30:00Z"
// description
// :
// "Latest Samsung flagship phone."
// email
// :
// "karim@gmail.com"
// image
// :
// "https://example.com/images/galaxy.jpg"
// location
// :
// // "Chattogram"
// // price_max
// // :
// 900
// price_min
// :
// 700
// seller_contact
// :
// "01822222222"
// seller_image
// :
// "https://example.com/users/user2.jpg"
// seller_name
// :
// "Karim Hasan"
// status
// :
// "sold"
// title
// :
// "Samsung Galaxy S24"
// usage
// :
// "3 months old"
// _id
// :
// "661f1a1b2c3d4e5f600002"