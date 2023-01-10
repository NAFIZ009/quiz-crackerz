import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const {loading,user,logOut}=useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='py-2 '>
        <Navbar.Brand href="#home"><Link to='/' className='logo'>Quiz Station</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='d-flex justify-content-end' style={{
          fontFamily: "Poppins, sans-serif"
        }}>
          <Nav.Link  className=''><Link to='/topics'>Topics</Link></Nav.Link>
          <Nav.Link ><Link to='blogs' >Blog</Link></Nav.Link>
          <Nav.Link >{
            !loading&&user?.uid&&<Link className='text-primary fw-bold fs-6 shadow-sm rounded py-0 px-1 ' to={`/statictics/${user.email}`}>{user.userInfo?.name}</Link>
          }</Nav.Link>
          <Nav.Link>{
            !loading&&user?.uid?<><Link onClick={()=>logOut()}>LogOut</Link></>
            :<div className='d-flex flex-lg-row flex-column gap-3'>
              <Link  to='/login'>Log In</Link>
              <Link  to='/signup'>Sign up</Link>
            </div>
          }</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;








