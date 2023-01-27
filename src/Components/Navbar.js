import React from 'react';
import Logo2 from '../images/logo2.png'
import './Navbar.css'
function Navbar(props) {
    return (
        <nav>
        <div className="nav-main">
            <div className ="nav-header">
              <img src={Logo2} className="logo"/>
            </div>
            <ul className="menu">
                <li>
                    <a onClick={() => document.getElementById("home").scrollIntoView()}>Home</a>
                </li>
    
                <li>
                    <a onClick={() => document.getElementById("about-us").scrollIntoView()}>About Us</a>
    
                </li>
    
                <li>
                    <a onClick={() => document.getElementById("products").scrollIntoView()}>Shop</a>
    
                </li>
    
                <li>
                    <a onClick={() => document.getElementById("contact-us").scrollIntoView()}>Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;