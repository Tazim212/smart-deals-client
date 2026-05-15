import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const MyProducts = () => {

    const { user } = use(AuthContext)
    const [myProduct, setMyProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myproducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
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
    
                    fetch(`http://localhost:5000/myproducts/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
    
                            if (data.deletedCount) {
    
                                const remaining = myProduct.filter(product => product._id !== id);
                                setMyProduct(remaining);
    
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
            <h1 className='text-3xl font-bold text-center'>My Bids: <span className='text-purple-500'>{myProduct.length}</span></h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                {myProduct.length === 0 ?
                    <h2 className='text-xl text-center py-8'>No bids has been added</h2>
                    :
                    <table className="table w-11/12 ms-14 my-5 bg-gray-300">
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myProduct.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.min_price} - {product.max_price}</td>
                                    <td className="badge badge-warning mt-3.5">Pending</td>
                                    <td>
                                        <button className='btn btn-soft btn-success'>Edit</button>
                                        <button onClick={() =>handleDelete(product._id)} className='btn btn-soft btn-error ms-2'>Delete</button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>}
            </div>
        </div>
    );
};

export default MyProducts;