import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location= useLocation()

    if(loading) return <p className='btn loading my-20 text-center'>Loading...</p>

    if (user) return children;
    else return <Navigate state={{from: location}} to="/login"></Navigate>
};

export default PrivateRoute;