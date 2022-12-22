import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const handleShowNavbar = () => {
        setOpen(!isOpen)
      }
    return (
        <div className='header'>
            <div className="container">
            <nav>
                <div className="log">
                    <Link href="/"><img src="https://i.ibb.co/Q80Z4Ss/Taste-now.png" alt="logo" /></Link>
                </div>
                
                <div className={`nav-elements  ${isOpen && 'active'}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="blog">Blog</a></li>
                    <li><a href="contactus">Contact Us</a></li>
                    <button className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></button>
                    <button>sign up</button>
                </ul>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger />
                </div>
            </nav>
            </div>
        </div>
    );
};

export default NavBar;