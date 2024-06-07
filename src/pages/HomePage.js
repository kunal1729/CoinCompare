import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { CryptoProvider } from '../context/CryptoContext';

const HomePage = () => {
  return (
    // header
    <CryptoProvider>
        <div className=" pb-10 bg-gray-100 bg-[url('./assets/homepage.avif')] min-h-screen bg-cover bg-center lg:pl-10 font-nunito ">
          <Navbar/>
          <Outlet/>
        </div>
    </CryptoProvider>
  )
}

export default HomePage;
