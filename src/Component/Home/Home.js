import React from 'react';
import NavBar from '../NavBar/NavBar';
import AboutUs from './AboutUs/AboutUs';
import Catagories from './Categories/Catagories';
import HeroSection from './Hero-section/HeroSection';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <NavBar />
            <HeroSection />
            <Catagories />
            <AboutUs />
        </div>
    );
};

export default Home;