import React from 'react';

import AboutUs from './AboutUs/AboutUs';
import Catagories from './Categories/Catagories';
import Footer from './Footer/Footer';
import HeroSection from './Hero-section/HeroSection';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <HeroSection />
            <Catagories />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;