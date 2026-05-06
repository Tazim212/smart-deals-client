import React from 'react';
import logo1 from "../../assets/bg-hero-left.png"
import logo2 from "../../assets/bg-hero-right.png"
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='shadow-lg h-80'>
            <div className='flex justify-around'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>

            <div className='relative mt-5'>
                <h1 className='font-bold text-5xl absolute right-90 left-105 bottom-108'>Deal your <span className='text-purple-500'>Products </span><br></br>
                    in a <span className='text-purple-500'>Smart</span> way !</h1>
                <p className='absolute right-60 left-80 bottom-100'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>

                <div className="join absolute right-90 left-105 bottom-85">
                    <input type="email" className='border w-80 rounded-l-4xl ps-3' placeholder="Search For Products" required />
                    <div className="validator-hint hidden">Enter valid email address</div>
                    <button className="btn rounded-r-full bg-purple-500 mr-2"><FaSearch className='text-white'></FaSearch></button>
                </div>
                <div className='absolute left-110 bottom-70'>
                    <button className='btn bg-purple-500 text-white'>Watch All Products</button>
                    <button className='btn'>Post an product</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;