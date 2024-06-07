import React from 'react'
import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SaveBtn = ({data}) => {
  
  const {saveCoin, allSavedCoins, unsaveCoin} = useContext(CryptoContext);

  const handleClick = (e) => {
    e.preventDefault();
    if(allSavedCoins.includes(data.id))
    {
      unsaveCoin(data.id);
    }
    else
    {
      saveCoin(data.id);
    }
  };
  

  return(
    <button onClick={handleClick}  className='ml-1 mr-4'>
      <svg  className= {`w-9 h-9 ${allSavedCoins.includes(data.id) ? " fill-yellow" : "fill-none"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    </button>
  )
}

const Table = () => {
  let {cryptoData, currency} = useContext(CryptoContext);

  return (
    <div className=' mt-10 w-[80%] m-auto rounded-md'>
      {cryptoData ?
      <table className=' w-full border-2 rounded-lg border-white table-auto mb-2 text-center'>
        <thead className=' capitalize text-gray-100' >
            <tr className=' border border-white'>
                <th className='py-2'>Asset</th>
                <th className='py-2 sm:table-cell hidden'>Name</th>
                <th className='py-2'>Price</th>	
                <th className='py-2 sm:table-cell hidden'>Total Volume</th>
                <th className='py-2 md:table-cell hidden'>market cap change</th>
                <th className='py-2 lg:table-cell hidden'>1H</th>
                <th className='py-2 lg:table-cell hidden'>24H</th>
            </tr>
        </thead>
        <tbody className=' text-center border-b border-white text-white'>
          {
            cryptoData.map(data => {
              return(
                <tr  className=' border-b border-white hover:bg-gray-100' >
                <td id = {data.id} className='  flex items-center py-4'>
                  <SaveBtn data={data}  />
                  <img className=' w-9 h-9' src={data.image} alt='bitcoin'></img>
                  <p className=' ml-1 uppercase font-bold'><NavLink to={`./${ data.id }`}>{data.symbol}</NavLink></p>
                </td>
                <td id = {data.id} className='sm:table-cell hidden py-4'>
                  {data.name}
                </td>
                <td id = {data.id} className=' py-4' > {new Intl.NumberFormat('en-IN', {
                 style: 'currency',
                 currency: currency
                 }).format(data.current_price)}</td>	
                <td className='sm:table-cell hidden' id = {data.id}>{data.total_volume}</td>
                <td id = {data.id} className= { data.market_cap_change_percentage_24h > 0 ? "text-green py-4 md:table-cell hidden " : " text-red py-4 md:table-cell hidden"}>{Number(data.market_cap_change_percentage_24h).toFixed(2)}%</td>
                <td id = {data.id} className= {data.price_change_percentage_1h_in_currency > 0 ? "text-green py-4 lg:table-cell hidden" : " text-red py-4 lg:table-cell hidden"} >{Number(data.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                <td id = {data.id} className= {data.price_change_percentage_24h > 0 ? "text-green py-4 lg:table-cell hidden" : " text-red py-4 lg:table-cell hidden"}>{Number(data.price_change_percentage_24h).toFixed(2)}%</td>
                </tr>
              )
            } )
          }
        </tbody>
      </table> : null}
    </div>
  )
}

export default Table
