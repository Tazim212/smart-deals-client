import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [conditions, setConditions] = useState("")
    // console.log(id)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://smart-deals-server-tc3q.onrender.com/updateproducts/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setConditions(data.condition)
            })
    }, [id])

    const handleUpdate = e => {
        e.preventDefault()

        const title = e.target.title.value;
        const min_price = e.target.min_price.value;
        const condition = e.target.condition.value;
        const seller_contact = e.target.seller_contact.value;
        const category = e.target.category.value;
        const max_price = e.target.max_price.value;
        const usage_time = e.target.usage_time.value;
        const location = e.target.location.value;

        const updateProduct = {
            title,
            min_price,
            condition,
            seller_contact,
            category,
            max_price,
            usage_time,
            location
        }

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://smart-deals-server-tc3q.onrender.com/updateproducts/${id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateProduct)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.modifiedCount > 0) {
                            setProduct(data)
                            navigate("/myproducts")
                            Swal.fire("Saved!", "", "success")
                        }
                    })
            }
            else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
        });

    }

    return (
        <div className='my-9'>
            <h1 className='text-3xl font-bold text-center'>Update <span className='text-purple-500'>Product</span></h1>
            <form onSubmit={handleUpdate} className=' bg-cyan-500 py-5 px-8 mx-auto w-70 md:w-1/2 my-4'>
                <div className="grid grid-cols-12 gap-3 md:gap-9">
                    <div className="col-span-12 md:col-span-6 space-y-2">
                        <label className='text-sm md:text-lg'>Title</label>
                        <input type="text" placeholder="Enter the product Name" name="title" className="input" defaultValue={product.title} required />

                        <label className='py-2 text-sm md:text-lg'>Min Price You want to Sale ($)</label>
                        <input type="text" placeholder="e.g. 18.5" name='min_price' className="input mt-3" defaultValue={product.min_price} required></input>

                        <label className='text-sm md:text-lg'>Product Condition</label>
                        <div className='flex items-center gap-3 my-0 md:my-4 py-3 md:py-0'>
                            <label className="label">
                                <input type="radio" name="condition" className="radio radio-primary" value="brands" checked={conditions === "brands"} onChange={() => setConditions("brands")} />
                                <label>Brands</label>
                                <input type="radio" name="condition" className="radio radio-primary" value="used" checked={conditions === "used"} onChange={() => setConditions("used")} />
                                <label>Used</label>
                            </label>

                        </div>

                        <label className='text-sm md:text-lg'>Seller Name</label>
                        <input type="text" placeholder="Enter Your Name" name='seller_name' className="input mt-3" defaultValue={product.seller_name} readOnly required />

                        <label className='text-sm md:text-lg'>Seller Contact</label>
                        <input type='tel' maxLength={11} placeholder="Enter Your Number" name='seller_contact' className="input mt-3" defaultValue={product.seller_contact} required />
                    </div>

                    <div className="col-span-12 md:col-span-6 space-y-2">
                        <label className='text-sm md:text-lg'>Category</label>
                        <select defaultValue={product.category} name='category' className="select appearance-none" required>
                            <option disabled={true}>Select A Category</option>
                            <option>Bike or Cars</option>
                            <option>Watch</option>
                            <option>Mobiles</option>
                            <option>Laptop & Monitor Accessories</option>
                            <option>Electrical Accessories</option>
                            <option>Airbuds</option>
                        </select>

                        <label className='text-sm md:text-lg'>Max Price You want to Sale ($)</label>
                        <input type="text" placeholder="Optional (default = Min Price)" name='max_price' className="input mt-3" defaultValue={product.max_price} required />

                        <label className='text-sm md:text-lg'>Product Usage time</label>
                        <input type="text" placeholder="e.g. 1 year 3 month" name='usage_time' className="input mt-3" defaultValue={product.usage_time} required />

                        <label className='text-sm md:text-lg'>Seller Email</label>
                        <input type="email" placeholder="Enter Your Email" name='seller_email' className="input mt-3" defaultValue={product.seller_email} required />

                        {/* <label className='text-sm md:text-lg'>Seller Image</label>
                        <input type="text" placeholder="Your Phone Number" name='seller_number' className="input mt-3" /> */}
                    </div>
                </div>
                <div>
                    <label className=''>Location</label>
                    <input type="text" placeholder="Enter Your Address" name='location' className="input w-full mt-1.5" defaultValue={product.location} required />
                </div>

                <button type="submit" className='btn btn-secondary w-full mt-3'>Update Product</button>
            </form>
        </div>
    )
}
export default UpdateProduct;