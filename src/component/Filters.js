import React from 'react'
import Search from './Search';
import Sort from './Sort';
import Currency from './Currency';
import { CryptoContext } from '../context/CryptoContext';
import { useContext } from 'react';

const Filters = () => {

  const {resetPage} = useContext(CryptoContext);

  return (
    <div className='flex flex-col' >
      <Search/>
      <div className=' justify-center items-center space-x-8 m-auto text-white flex flex-col sm:flex-row mt-8 w-[70%] ml-30'>
        <Currency/>
        <Sort/>
        <button className='text-white items-center ' onClick={resetPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" hover:scale-125 transition-transform duration-300 text-cyan lucide lucide-rotate-ccw ease-in "><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          <label className='text-cyan  text-center' >Reset</label>
        </button>
      </div>
    </div>
  )
}

export default Filters;
