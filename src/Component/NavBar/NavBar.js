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
                <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger />
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                    <button className='cart-icon'><FontAwesomeIcon icon={faShoppingCart} /></button>
                    <button>sign up</button>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default NavBar;