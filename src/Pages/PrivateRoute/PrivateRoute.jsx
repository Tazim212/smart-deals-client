import React, { use } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation()
    // console.log(location)
    if (loading) {
        return <div className='text-center my-20'><span className="loading loading-spinner loading-xl"></span></div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/signin" state={location.pathname}></Navigate>
    }
};

export default PrivateRoute;