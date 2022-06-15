import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

const ProtectedRoute = (props) => {
    const {loggedUser,isLoading}=useAuth();
    const {children}=props;
     const location=useLocation();
     if(isLoading){
        
        return <Spinner animation="border" variant="primary" />
     }

    if(!loggedUser.email){
        return <Navigate 
        to="login"
        replace
        state={{from:location}}
        />
    }
    return children;
    
};

export default ProtectedRoute;