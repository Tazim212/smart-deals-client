import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';

const Register = () => {
    const {handleSignUp} = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log(email, password)

        handleSignUp(email, password)
        .then(res =>{
            console.log(res.user)
            e.target.reset()
        })
        .then(err =>{
            console.log(err)
        })
    }
    return (
        <form onSubmit={handleRegister}>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-4 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Register now!!!</h1>
                    <fieldset className="fieldset">
                        {/* <label className="label">Your Name</label>
                        <input type="email" className="input" name="name" placeholder="Email" /> */}
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name="password" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-lg italic'>Already have an account?<Link to="/signin" className='underline'>Log in</Link> now</p>
                </div>
            </div>
        </form>
    );
};

export default Register;