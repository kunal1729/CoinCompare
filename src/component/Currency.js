import React from 'react'
import { CryptoContext } from '../context/CryptoContext';
import { useRef } from 'react';
import { useContext } from 'react';

const Currency = () => {

  const {setCurrency} = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) =>
  {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  }

  return (
    <div className=' z-0'>
      <label className=' ml-2 font-bold uppercase'>currency</label>
      <form onSubmit={handleCurrencySubmit} className=' m-2 w-28 relative items-center flex mx-auto' >
        <input ref={currencyRef} placeholder='USD' className=' focus:border-cyan  border-2 border-cyan text-white w-full rounded-lg bg-gray-200' type = "text" />
        <button type='submit' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" text-white absolute bottom-2 right-2 w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>  
      </form>
    </div>
  )
}

export default Currency
