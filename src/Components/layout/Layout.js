import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Layout = () => {
  return (
    <div className='layout_Wrapper'>
        <Navbar />
        <Outlet /> 
        <Footer />
    </div>
  )
}

export default Layout