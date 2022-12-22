import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';

const Main = () => {
    return (
    <div className='px-10'>
      <NavBar />
      <Outlet />
    </div>
    );
};

export default Main;