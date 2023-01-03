import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../Context/AuthContext';

const Navbar = () => {
    const {loading,user,logOut}=useContext(Context);
    console.log(user)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div className="container d-flex align-items-baseline">
    <Link to='/' className='logo'>Quiz Station</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{
        flexGrow:0
    }}>
      <div className="navbar-nav gap-5" style={{
        fontFamily: "Poppins, sans-serif"
      }}>
        <Link to='/topics'>Topics</Link>
        { 
          // <Link to='/statictics'>Statictics</Link>
        }
        <Link to='blogs'>Blog</Link>
        {
          !loading&&user?.uid&&<Link className='text-primary fw-bold fs-6 shadow-sm rounded py-0 px-1 ' to={`/statictics/${user.email}`}>{user.userInfo?.name}</Link>
        }
        {
          !loading&&user?.uid?<><Link onClick={()=>logOut()}>LogOut</Link></>
          :<>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
          </>
        }
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navbar;