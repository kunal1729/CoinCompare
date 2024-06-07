import React from 'react'
import Filters from '../component/Filters';
import Table from '../component/Table';
import Pagination from '../component/Pagination';
import { Outlet } from 'react-router-dom';

const Crypto = () => {
  return (
      <div className='mt-10 mb-5 mx-auto'>
        <Filters />
        <Table />
        <div className='flex flex-col'>
          <span className=' capitalize mt-2 text-md mx-auto text-white'>Data provided by <a href='https://www.coingecko.com/' className='text-cyan'> CoinGecko</a></span>
          <Pagination />
        </div>
        <Outlet/>
      </div>
  )
}

export default Crypto;
