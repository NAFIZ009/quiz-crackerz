import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
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

export default CollapsibleExample;







// const NavbarCom = () => {

//     const {loading,user,logOut}=useContext(Context);
//     console.log(user)
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
//   <div className="container d-flex align-items-baseline">
//     <Link to='/' className='logo'>Quiz Station</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{
//         flexGrow:0
//     }}>
//       <ul className="navbar-nav gap-5" style={{
//         fontFamily: "Poppins, sans-serif"
//       }}>
//       <li class="nav-item">
//       <a class="nav-link active" aria-current="page" href="/">Home</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/">Features</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/">Pricing</a>
//     </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>
//     );
// };
// <Link to='/topics'>Topics</Link>
//         { 
//           // <Link to='/statictics'>Statictics</Link>
//         }
//         <Link to='blogs'>Blog</Link>
        // {
        //   !loading&&user?.uid&&<Link className='text-primary fw-bold fs-6 shadow-sm rounded py-0 px-1 ' to={`/statictics/${user.email}`}>{user.userInfo?.name}</Link>
        // }
        // {
        //   !loading&&user?.uid?<><Link onClick={()=>logOut()}>LogOut</Link></>
        //   :<>
        //     <Link to='/login'>Log In</Link>
        //     <Link to='/signup'>Sign Up</Link>
        //   </>
        // }
// export default NavbarCom;