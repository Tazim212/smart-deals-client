import React, { use } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Layout/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/signin" state={location.pathname}></Navigate>
    }
};

export default PrivateRoute;