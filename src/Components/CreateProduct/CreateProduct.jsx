import React, { use } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';

const CreateProduct = () => {

    const { user } = use(AuthContext)

    const addNewProduct = e => {
        e.preventDefault()

        const title = e.target.title.value;
        const min_price = e.target.min_price.value
        const max_price = e.target.max_price.value
        const seller_name = e.target.seller_name.value
        const seller_email = e.target.seller_email.value
        const seller_contact = e.target.seller_contact.value
        const category = e.target.category.value
        const usage_time = e.target.usage_time.value
        const location = e.target.location.value

        const newProduct = {
            title,
            min_price,
            max_price,
            seller_name,
            seller_email,
            seller_contact,
            category,
            usage_time,
            location
        }
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            e.target.reset()
    }



    return (
        <div className='my-9'>
            <h1 className='text-3xl font-bold text-center'>Create A <span className='text-purple-500'>Product</span></h1>
            <form onSubmit={addNewProduct} className=' bg-gray-200 py-5 px-8 mx-auto w-1/2 my-4'>
                <div className="grid grid-cols-12 gap-9">
                    <div className="col-span-6 space-y-2">
                        <label>Title</label>
                        <input type="text" placeholder="Enter the product Name" name="title" className="input" required />

                        <label className='py-2'>Min Price You want to Sale ($)</label>
                        <input type="text" placeholder="e.g. 18.5" name='min_price' className="input mt-3" required></input>

                        <label>Product Condition</label>
                        <div className='flex items-center gap-3 my-4'>
                            <label className="label">
                                <input type="checkbox" className="checkbox" name='br' />
                                Brand New
                            </label>
                            <label className="label">
                                <input type="checkbox" className="checkbox" />
                                Used
                            </label>
                        </div>

                        <label>Seller Name</label>
                        <input type="text" placeholder="Enter Your Name" name='seller_name' defaultValue={user?.name} className="input mt-3" required />

                        <label>Seller Contact</label>
                        <input type="text" placeholder="Enter Your Number" name='seller_contact' className="input mt-3" required />
                    </div>

                    <div className="col-span-6 space-y-2">
                        <label>Category</label>
                        <select defaultValue="Select A Category" name='category' className="select appearance-none" required>
                            <option disabled={true}>Select A Category</option>
                            <option>Bike or Cars</option>
                            <option>Watch</option>
                            <option>Mobiles</option>
                            <option>Laptop & Monitor Accessories</option>
                            <option>Electrical Accessories</option>
                            <option>Airbuds</option>
                        </select>

                        <label>Max Price You want to Sale ($)</label>
                        <input type="text" placeholder="Optional (default = Min Price)" name='max_price' className="input mt-3" required />

                        <label>Product Usage time</label>
                        <input type="text" placeholder="e.g. 1 year 3 month" name='usage_time' className="input mt-3" required />

                        <label>Seller Email</label>
                        <input type="email" placeholder="Enter Your Email" name='seller_email' defaultValue={user?.email} readOnly className="input mt-3" required />

                        <label>Seller Image</label>
                        <input type="text" placeholder="Your Phone Number" name='seller_number' className="input mt-3" />
                    </div>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" placeholder="Enter Your Address" name='location' className="input w-full mt-1.5" required />
                </div>

                <button type="submit" className='btn btn-secondary w-full mt-3'>Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;