import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import Spinner from '../components/Spinner/Spinner';
import { Context } from '../Context/AuthContext';

const Main = () => {
    const {loading}=useContext(Context);
    console.log(loading);
    return (
        <div>
            <Navbar/>
            {
                loading? <Spinner/>:<Outlet/>

            }
        </div>
    );
};

export default Main;