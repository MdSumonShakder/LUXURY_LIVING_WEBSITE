
import React from 'react';
import { Navbar, Container, Nav, Spinner } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
// import useAuth from '../../../hooks/useAuth';







const Navigation = () => {
// const {user,logout,isLoading}=useAuth();
// if(isLoading){
//   return  <Spinner animation="border" variant="danger" />
// }
  return (
    <div className="mt-5">
      <Navbar className='pt-4' fixed="top" collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="fw-bolder justify-content-center">
            <Nav.Link className="text-black link" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="text-black link" as={HashLink} to="/home#banner">Banner</Nav.Link>
            <Nav.Link className="text-black link" as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link className="text-black link" as={HashLink} to="/home#projects">Projects</Nav.Link>
            <Nav.Link className="text-black link" as={HashLink} to="/home#testimonials">Testimonials</Nav.Link>
            <Nav.Link className="text-black link" as={HashLink} to="/home#contact">Contact</Nav.Link>
            <Nav.Link className="text-black link" as={HashLink} to="/home#footer">Footer</Nav.Link>
         <button className="fw-bold mx-2 sty">   <Nav.Link className="text-white" as={HashLink} to="/login">Login</Nav.Link>
         </button>


{/* 
            {
             user?.email ? 
        
            <>
           <Nav.Link className="text-white" as={HashLink} to="/dashboard">
                <Button className="fw-bold">Dashboard</Button> 
               </Nav.Link>
                <Button className="fw-bold mx-4" onClick={logout}>LogOut</Button> 
            </>
                :
            <Nav.Link className="text-white" as={HashLink} to="/login">Login</Nav.Link>
             
              }

            <Navbar.Text className="text-white fw-bolder">Sing In: <a className="text-dark" href="/login">{user?.displayName}</a>
            </Navbar.Text> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;