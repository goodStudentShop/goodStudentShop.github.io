import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import {Link} from "react-router-dom";

class NavbarWithoutCart extends React.Component{
    render(){
        return(
        <Navbar expand="lg" className="navbarObj" id="navbar">
          <Navbar.Brand href="#home">
            <div className="navLogo">
              <i className="fas fa-user-graduate logo"></i>
              <span className="navBrand">好學生文具網</span>
            </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav className="navbarHome">
              <Link to="/">
                 
                  <i class="fas fa-home"></i>
                  <span className="navbarHomeTitle">
                    首頁
                  </span>
                  
              </Link>
            </Nav>
            <Nav className="navbarCupon">
              <Link to="/cupon">
                  <div className="navbarCuponTitle">
                  優惠活動
                  </div>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
        )
    }
}
export default NavbarWithoutCart;