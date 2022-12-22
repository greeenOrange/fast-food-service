import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faInstagram, faTwitter, faYoutube , } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className="container">
                <div className="footer-container">
                <div className="footer-logo">
                <div>
                <Link to='/'><img src="https://i.ibb.co/5Gz7fNM/Tast-now-nav.png" alt="logo" /></Link>
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
                </div>
            </div>
            <div className="footer-menu">
                <ul>
                    <li><a href="">Seslendirme ve Alt Jazz</a></li>
                    <li><a href="">Media Market</a></li>
                    <li><a href="">Gillie</a></li>
                    <li><a href="">Size Last</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <ul>
                    <li><a href="">Self Betimes</a></li>
                    <li><a href="">Yatırımcı İlişkileri</a></li>
                    <li><a href="">Basal Himmler</a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <ul>
                    <li><a href="">Yard Market</a></li>
                    <li><a href="">Is İmkanları</a></li>
                    <li><a href="">Car Tercihleri</a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <ul>
                    <li><a href="">Hedge Karla</a></li>
                    <li><a href="">Mullein Koşulları</a></li>
                    <li><a href="">Autumnal Bulgier</a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
                </div>
            
            </div>
        </footer>
    );
};

export default Footer;