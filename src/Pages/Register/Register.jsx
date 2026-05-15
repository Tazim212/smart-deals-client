import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const { handleSignUp, updateUser } = use(AuthContext)
    const [show, setShow] = useState(false)
    const [error, setError] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value

        setError("")
        handleSignUp(email, password)
            .then(() => {
                // console.log(res.user)
                const userInfo = {
                    name,
                    email
                }
                updateUser(name)
                    .then(() => { })
                    .catch(err => {
                        console.log(err)
                        // setError(err)
                    })
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            Swal.fire("User Registered Successfully")
                        }
                        navigate(location?.state || "/")
                        e.target.reset()
                    })

            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-4 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Register now!!!</h1>
                    <fieldset className="fieldset relative">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name="name" placeholder="Enter Your Name" required/>
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" required/>
                        <label className="label">Password</label>
                        <input type={show ? "text" : "password"} className="input" name="password" placeholder="Password" required/>
                        {
                            show ?
                                <FaEye onClick={() => setShow(false)} className='absolute right-5 top-46'></FaEye>
                                :
                                <FaEyeSlash onClick={() => setShow(true)} className='absolute right-5 top-46'></FaEyeSlash>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-md italic'>Already have an account? <Link to="/signin" className='underline'>Log in</Link> now</p>
                    <p className='py-3 text-md text-red-600 text-center'>{error.message}</p>
                </div>
            </div>
        </form>
    );
};

export default Register;