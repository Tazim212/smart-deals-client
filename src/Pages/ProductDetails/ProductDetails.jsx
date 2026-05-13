import React, { use, useEffect, useRef, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const productDetails = useLoaderData()
    const { user } = use(AuthContext)
    const bidsRef = useRef(null)
    const [bids, setBids] = useState([])
    const { _id, title, price_min, price_max, description, created_at, location, seller_name, seller_contact, email, status } = productDetails

    const handleModal = () => {
        bidsRef.current.showModal()
    }

    const handleCLose = () => {
        bidsRef.current.close()
    }

    const handleBids = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const price = e.target.price.value
        const contact = e.target.contact.value

        const bidsValue = {
            productId: _id,
            product_name: title,
            buyer_name: name,
            buyer_email: email,
            bid_price: price,
            buyer_contact: contact
        }

        fetch("http://localhost:5000/bids", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bidsValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    const newBids = [...bids, data]
                    setBids(newBids)

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your bid has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        handleCLose()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/product/bids/${_id}`)
            .then(res => res.json())
            .then(data => {
                setBids(data)
            }, [_id]
            )
    })

    return (
        <div className='my-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4 mx-5 md:mx-50'>
                <div className="card bg-base-100 w-70 md:w-96 shadow-sm mt-20 md:mt-15">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold -ml-2 md:-ml-1">Product Description</h2>
                        <div className='flex justify-around items-center -ml-2 md:-ml-8'>
                            <h3 className='font-bold'>Condition : <span className='text-purple-500'>New</span></h3>
                            <h3 className='font-bold'>Usage Time : <span className='text-purple-500'>3 Month</span></h3>
                        </div>
                        <div className="divider"></div>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='mt-14'>
                    <Link to="/" className='flex items-center gap-2 my-4 md:my-0'><FaArrowLeft></FaArrowLeft> Back to Home</Link>
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
                        <div className="badge badge-warning font-semibold"><p>Status: {status}</p></div>

                    </div>

                    <dialog ref={bidsRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Give Seller Your Saler Price</h3>
                            <div className='my-6'>
                                <form onSubmit={handleBids}>
                                    <fieldset className='flex flex-col gap-4'>
                                        <label>Buyer_Name</label>
                                        <input className='input w-52 mr-10' type="text" name="name" readOnly defaultValue={user?.displayName} />
                                        <label>Buyer_Email</label>
                                        <input className='input w-52' type="email" name="email" readOnly defaultValue={user?.email} />
                                        <label>Bid Price</label>
                                        <input className='w-full input' type="text" name="price" required/>
                                        <label>Buyer_Contact</label>
                                        <input className='w-full input' type="text" name="contact" required/>
                                    </fieldset>

                                    <div className='mt-2'>
                                        <button type='submit' className="btn btn-secondary mr-3">Submit</button>
                                        <button onClick={handleCLose} type='button' className="btn btn-outline">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <button onClick={handleModal} className='btn btn-primary w-full'>I want to bid the product</button>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold ms-0 md:ms-15'>bids for this product: <span className='text-purple-500'>{bids.length}</span></h1>

                {bids.length === 0 ?
                    <h2 className='text-center text-lg py-4'>No bid has been placed for this product</h2>
                    :
                    <table className="table w-11/12 bg-gray-300 ms-0 md:ms-14 my-4">
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Product Name</th>
                                <th>Seller Name</th>
                                <th>Bid Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid, index) =>
                                <tr key={bid._id}>
                                    <td>{index + 1}</td>
                                    <td>{bid.product_name}</td>
                                    <td>{bid.buyer_name}</td>
                                    <td>{bid.bid_price}</td>
                                    <td>Delete</td>
                                </tr>)}
                        </tbody>
                    </table>}
            </div>
        </div>
    );
};
export default ProductDetails;
