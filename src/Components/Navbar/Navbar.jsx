import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';

const Navbar = () => {
    const { user, signUserOut } = use(AuthContext)
    const list = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <>
                <li><NavLink to="/allproducts">All Products</NavLink></li>
                <li><NavLink to="/myproducts">My Products</NavLink></li>
                <li><NavLink to="/mybids">My Bids</NavLink></li>
            </>
        }
        <li><NavLink to="/createproducts">Create Products</NavLink></li>
    </>

    const handleSignOut = () => {
        signUserOut()
            .then()
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='relative'>
            <div className="navbar bg-gray-400 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown -ms-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>
                    <Link to="/" className="text-md md:text-xl -ml-4 md:ml-4 font-bold">Smart Deals</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className='pr-0.5 md:pr-4 text-xs md:text-lg'>{user?.email}</p>
                    {
                        user ?
                            <button onClick={handleSignOut} className='btn btn-secondary'>Log Out</button>
                            :
                            <Link to="/signin" className="btn">Log In</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;