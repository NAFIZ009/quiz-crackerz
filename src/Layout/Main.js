import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/Navbar';
import Spinner from '../components/Spinner/Spinner';
import { Context } from '../Context/AuthContext';

const Main = () => {
    const {loading}=useContext(Context);
    console.log(loading);
    return (
        <div>
        <NavBar/>
        <div style={{
            minHeight:"100vh"
        }}>
        {
            loading? <Spinner/>:<Outlet/>
        }
        </div>
            
            <Footer/>
        </div>
    );
};

export default Main;