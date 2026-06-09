import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const { handleSignUp, updateUser, handleGoogleSignIn } = use(AuthContext)
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

        // const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

        // if (passRegex.test(password)) {
        //     setError("Password must contain one uppercase, one lowercase & min 8 characters")
        //     return
        // }


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
                        // console.log(err)
                        setError(err)
                    })
                fetch("https://smart-deals-server-tc3q.onrender.com/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire("User Registered Successfully")
                        }
                        navigate(location?.state || "/")
                        e.target.reset()
                    })

            })
            .catch(err => {
                setError(err.message)
            })
    }

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(res => {
                const userInfo = res.user
                fetch("https://smart-deals-server-tc3q.onrender.com/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(userInfo)
                })
                navigate(location?.state || "/")
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-4 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Register now!!!</h1>
                    <fieldset className="fieldset relative">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name="name" placeholder="Enter Your Name" required />
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type={show ? "text" : "password"}
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            className="input"
                            name="password"
                            placeholder="Password" required />
                        {
                            show ?
                                <FaEye onClick={() => setShow(false)} className='absolute right-5 top-46'></FaEye>
                                :
                                <FaEyeSlash onClick={() => setShow(true)} className='absolute right-5 top-46'></FaEyeSlash>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                    </fieldset>
                    <p className='text-md italic'>Already have an account? <Link to="/signin" className='underline'>Log in</Link> now</p>
                    <div className="flex w-70 mx-auto flex-col">
                        <div className="divider my-0">OR</div>
                        <button type='button' onClick={handleGoogle} className="btn btn-outline bg-gray-400 text-black border-[#e5e5e5] my-3 mx-3">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341">
                                </path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57">
                                </path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign Up with Google
                        </button>
                    </div>
                    {error && <p className='py-3 text-md text-red-600 text-center'>{error.message}</p>}
                </div>
            </div>
        </form>
    );
};

export default Register;