import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { Context } from '../Context/AuthContext';

const ProtectedRoute = ({children}) => {
    const {loading,user}=useContext(Context);
    const location=useLocation();
    
    if (loading) {
        return  <Spinner/>;
    }
    if(!user?.uid){
        console.log(loading,user);
        return <Navigate to='/login' state={location.pathname}/>
    }
    return  children;

};

export default ProtectedRoute;