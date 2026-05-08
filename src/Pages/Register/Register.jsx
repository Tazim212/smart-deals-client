import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { handleSignUp, updateUser } = use(AuthContext)
    const [show, setShow] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value

        handleSignUp(email, password)
            .then(res => {
                console.log(res.user)
                updateUser(name)
                    .then(() => { })
                    .catch(err => {
                        console.log(err)
                    })
                    navigate(location?.state || "/")
                e.target.reset()
            })
            .then(err => {
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleRegister}>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-4 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Register now!!!</h1>
                    <fieldset className="fieldset relative">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name="name" placeholder="Enter Your Name" />
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type={show ? "text":"password"} className="input" name="password" placeholder="Password" />
                        {
                            show ? 
                            <FaEye onClick={() => setShow(false)} className='absolute right-5 top-46'></FaEye>
                            :
                            <FaEyeSlash onClick={() =>setShow(true)} className='absolute right-5 top-46'></FaEyeSlash>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-md italic'>Already have an account? <Link to="/signin" className='underline'>Log in</Link> now</p>
                </div>
            </div>
        </form>
    );
};

export default Register;