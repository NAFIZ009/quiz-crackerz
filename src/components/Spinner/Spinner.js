import React from 'react';
import { Link } from 'react-router-dom';

const Spinner = () => {
    const style={
        width: '100%',
        height:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top: 0,
        left: 0,
    }
    return (
        <div style={style}>
        <div className='container-fluid position-absolute top-0 left-0 bg-light py-3 shadow-sm'>
        <Link className='logo '>Quiz Station</Link>
        </div>
        <span className='text-primary fs-4 fw-bold me-2'>Loading</span>
        <div class="spinner-border text-info " role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
        </div>
    );
};

export default Spinner;