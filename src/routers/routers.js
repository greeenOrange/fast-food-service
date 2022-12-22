import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../Component/AboutUs/AboutUs';
import Blog from '../Component/Blog/Blog';
import ContactUs from '../Component/ContactUs/ContactUs';
import Home from '../Component/Home/Home';
import Main from '../Component/Main';

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
      ],
    },
  ]);

export default routers;