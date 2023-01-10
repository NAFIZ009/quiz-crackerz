import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import CollapsibleExample from '../components/NavBar/Navbar';
import Navbar from '../components/NavBar/Navbar';
import Spinner from '../components/Spinner/Spinner';
import { Context } from '../Context/AuthContext';

const Main = () => {
    const {loading}=useContext(Context);
    console.log(loading);
    return (
        <div>
           { 
            // <Navbar/>
        }
        <CollapsibleExample/>
            {
                loading? <Spinner/>:<Outlet/>
            }
            <Footer/>
        </div>
    );
};

export default Main;