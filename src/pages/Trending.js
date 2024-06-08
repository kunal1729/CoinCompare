import React from 'react'
import { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import { NavLink, Outlet } from 'react-router-dom'

const Trending = () => {
  
  const {trendingData} = useContext(CryptoContext)
  if (!trendingData) {
    return null; 
  }
  
  return (
    <div className='mt-12 p-4 space-y-4 w-[80%] h-full border-2 border-gray-100 shadow-lg  m-auto rounded-md grid lg:grid-cols-2'>
      {trendingData.coins.map((coin) => {
        return (
        <div className='p-8 flex hover:bg-gray-100 rounded-md items-center space-x-8'>
          <img className='w-32 h-32' src= {coin.item.large}/>
          <div className=' items-center'>
            <label className='text-cyan flex items-center'>
              <NavLink to={`./${ coin.item.id}`}><p><span>Name :  </span>{coin.item.name}</p></NavLink>
            </label>
            <label className='text-cyan flex items-center'>
              <p><span>Price :  </span>{Number(coin.item.data.price).toFixed(5)}$</p> 
            </label>
            <label className='text-cyan flex items-center'>
              <p><span>Market cap :  </span>{coin.item.data.market_cap}</p> 
            </label>
            <label className='text-cyan flex items-center'>
              <p><span>Market cap rank :  </span>{coin.item.market_cap_rank}</p> 
            </label>
            <label className='text-cyan flex items-center'>
              <p><span>Score :  </span>{coin.item.score}</p> 
            </label>
          </div>
      </div>)})}
      <Outlet/> 
    </div>
  )
}

export default Trending;
