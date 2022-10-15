import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate();
    const handle=()=>{
        navigate('/');
    }
    return (
        <>
        <div className='bg-danger fs-1 text-light'>
            Wrong Path.Please Went To The Home Page.
        </div>
        <button className='mt-5 btn btn-primary' onClick={handle}>
            HOME
        </button>
        </>
        
    );
};

export default ErrorPage;