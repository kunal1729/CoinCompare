import React from 'react'
import PaginationArrow from '../assets/pagination-arrow.svg' 

import { CryptoContext } from '../context/CryptoContext';
import { useContext } from 'react';
import PerPageBlock from './PerPageBlock';

const Pagination = () => {

  const {currentPage, setCurrentPage, totalPages, perPage, cryptoData} = useContext(CryptoContext);

  const totalNumber = Math.ceil(totalPages / perPage);
  
  const nextPage = () => 
  {
    if(currentPage === totalPages)
    {
        return null;
    }
    else{
        setCurrentPage(currentPage + 1);
    }
  }
  const multiPage = () => 
  {
    if(currentPage + 2 === totalNumber)
    {
        return null;
    }
    else{
        setCurrentPage(currentPage + 2);
    }
  }
  const prevPage = () => 
  {
    if(currentPage === 1)
    {
        return null;
    }
    else{
        setCurrentPage(currentPage - 1);
    }
  }
  if(cryptoData.length >= perPage)
  {
    return (
        <div className='p-1 text-white bg-gray-200 flex flex-col items-center border w-72 mx-auto mt-4 border-cyan'>
        <PerPageBlock/>  
        <ul className=' text-sm font-bold justify-end flex mx-auto space-x-3 items-center'>
            <li className='pt-1' >
                <button onClick={prevPage}>
                    <img className='w-8 h-8 rotate-180' alt='left' src= {PaginationArrow} />
                </button>
            </li>
            <li className= ' p-1 text-center align-top my-4 w-8 h-8 rounded-full bg-cyan text-gray-300 '>
                <button>
                    {currentPage}
                </button>

            </li>
            <li className= ' p-2 hover:*:text-cyan'>
                <button onClick={nextPage}>
                    {currentPage + 1}
                </button>
            </li>
            <li className= ' p-2 hover:*:text-cyan '>
                <button onClick={multiPage}>
                    ...
                </button>
            </li>
            <li className= ' pt-1 hover:*:text-cyan '>
                <button onClick={nextPage}>
                    <img className=' w-8 h-8' alt='left' src= {PaginationArrow} />
                </button>
            </li>
        </ul>  
        
        </div>
    )
  }
  else{
    return null;
  }     
}

export default Pagination;
