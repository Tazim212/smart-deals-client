import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Mybids = () => {
    const { user } = use(AuthContext)
    const [bids, setBida] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bids/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBida(data)
            })
    }, [user?.email])


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bids/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount) {

                            const remaining = bids.filter(bid => bid._id !== id);
                            setBida(remaining);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    });
            }

        });

    };

    return (
        <div className='my-12'>
            <h1 className='text-3xl font-bold text-center'>My Bids: <span className='text-purple-500'>{bids.length}</span></h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                {bids.length === 0 ?
                    <h2 className='text-xl text-center py-8'>No bids has been added</h2>
                    :
                    <table className="table w-11/12 ms-14 my-5 bg-gray-300">
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
                                    <th>{index + 1}</th>
                                    <td>{bid.product_name}</td>
                                    <td>{bid.buyer_name}</td>
                                    <td>{bid.bid_price}</td>
                                    <td><button onClick={() => handleDelete(bid._id)} className='btn btn-soft btn-error'>Remove bid</button></td>
                                </tr>)}
                        </tbody>
                    </table>}
            </div>
        </div>
    );
};

export default Mybids;