import React from 'react';
import NavBar from '../NavBar/NavBar';
import Catagories from './Categories/Catagories';
import HeroSection from './Hero-section/HeroSection';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <NavBar />
            <HeroSection />
            <Catagories />
        </div>
    );
};

export default Home;