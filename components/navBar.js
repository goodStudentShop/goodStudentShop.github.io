import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import {Link} from "react-router-dom";
import JumpOutShoppingCart from "./jumpOutShoppingCart";

class MyNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          cartItem: this.props.shoppingCartProducts,
          };
      }
    
    render(){
      return(
        <Navbar expand="lg" className="navbarObj" id="navbar">
          <Navbar.Brand href="#home">
            <div className="navLogo">
              <i className="fas fa-user-graduate logo"></i>
              <span className="navBrand">好學生文具網</span>
            </div>
          </Navbar.Brand>
          <Navbar.Brand>
          <JumpOutShoppingCart
              cartItem={this.props.shoppingCartProducts}
              removeCartProduct={this.props.removeCartProduct}
              totalPrice={this.props.totalPrice}
              totalItem={this.props.totalItem}
              iconShake={this.props.iconShake}
              />
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
export default MyNavbar;