import React from 'react'
import { CryptoContext } from '../context/CryptoContext';
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';

const Saved = () => {
  const {savedData, currency} = useContext(CryptoContext)
  console.log(savedData);
  return (
    <div className=' mt-10 w-[80%] m-auto rounded-md'>
      {savedData && savedData.length > 0 ?
      <table className=' w-full border-2 rounded-lg border-white table-auto mb-2 text-center'>
        <thead className=' capitalize text-gray-100 p-2' >
            <tr className=' border border-white'>
                <th className='py-2'>Asset</th>
                <th className='sm:table-cell hidden py-2'>Name</th>
                <th className='py-2'>Price</th>	
                <th className='sm:table-cell hidden py-2'>Total Volume</th>
                <th className='md:table-cell hidden py-2'>market cap change</th>
                <th className='lg:table-cell hidden py-2'>1H</th>
                <th className='lg:table-cell hidden py-2'>24H</th>
            </tr>
        </thead>
        <tbody className=' text-center border-b border-white text-white'>
          {
            savedData.map(data => {
              return(
                <tr  className=' border-b border-white hover:bg-gray-100' >
                <td id = {data.id} className=' flex items-center py-4'>
                  
                  <img className=' w-9 h-9 ml-2' src={data.image} alt='bitcoin'></img>
                  <p className=' ml-1 uppercase font-bold'><NavLink to={`./${ data.id }`}>{data.symbol}</NavLink></p>
                </td>
                <td id = {data.id} className='sm:table-cell hidden py-4'>
                  {data.name}
                </td>
                <td id = {data.id} className=' py-4' > {new Intl.NumberFormat('en-IN', {
                 style: 'currency',
                 currency: currency
                 }).format(data.current_price)}</td>	
                <td id = {data.id} className='sm:table-cell hidden'>{data.total_volume}</td>
                <td id = {data.id} className= { data.market_cap_change_percentage_24h > 0 ? "text-green py-4 md:table-cell hidden" : " text-red py-4 md:table-cell hidden"}>{Number(data.market_cap_change_percentage_24h).toFixed(2)}%</td>
                <td id = {data.id} className= {data.price_change_percentage_1h_in_currency > 0 ? "text-green py-4 lg:table-cell hidden" : " text-red py-4 lg:table-cell hidden"} >{Number(data.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                <td id = {data.id} className= {data.price_change_percentage_24h > 0 ? "text-green py-4 lg:table-cell hidden" : " text-red py-4 lg:table-cell hidden"}>{Number(data.price_change_percentage_24h).toFixed(2)}%</td>
                </tr>
              )
            } )
          }
        </tbody>
      </table> : 
      <h1 className=' min-h-[60vh] text-lg text-cyan items-center justify-center '>
        There is no data to diplay!
      </h1>
      }
      <Outlet/>
    </div>
  )
}

export default Saved;
