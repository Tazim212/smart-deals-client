import React from 'react';
import logo1 from "../../assets/bg-hero-left.png"
import logo2 from "../../assets/bg-hero-right.png"
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='shadow-lg h-90'>
            <div className='flex justify-around'>
                <img src={logo1} className='h-80' alt="" />
                <img src={logo2} className='h-80' alt="" />
            </div>

            <div className='relative bottom-60'>
                <h1 className='font-bold text-2xl md:text-5xl text-center'>Deal your <span className='text-purple-500'>Products </span><br></br>
                    in a <span className='text-purple-500'>Smart</span> way !</h1>
                <p className='text-center py-3'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>

                <div className="flex justify-center text-center my-3 mx-6 md:mx-0">
                    <input type="email" className='border w-80 rounded-l-4xl ps-3 py-1.5' placeholder="Search For Products" required />
                    <div className="validator-hint hidden">Enter valid email address</div>
                    <button className="btn rounded-r-full bg-purple-500 mr-2 -pt-1"><FaSearch className='text-white'></FaSearch></button>
                </div>
                <div className='text-center mx-3 md:mx-0'>
                    <button className='btn bg-purple-500 text-white'>Watch All Products</button>
                    <button className='btn'>Post an product</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;