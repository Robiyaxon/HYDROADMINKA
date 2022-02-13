import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';



function PrivateRoute( { children }) {
    const { auth } = useSelector(state => state)
    const isLoggedIn = auth.accessToken;
    const location = useLocation()

    return isLoggedIn ? (
        <>{children}</>
    ) : (
        <Navigate
        replace={true}
        to="/login"
        state={{ from: `${location.pathname}${location.search}` }}
        />
    )
}
export { PrivateRoute };    