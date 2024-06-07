import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext';
import Indicator from './Indicator';

const Left = () => {

  const {coinData, currency} = useContext(CryptoContext);

  return (
    <div className='flex space-y-5 pl-2 mb-4 pr-2 flex-col w-full lg:w-[45%] h-full mr-2'>
      <div className='flex items-center space-x-3'>
      <img alt='img' src={coinData.image.small} />
        <h1 className='text-xl font-semibold'>{coinData.name}</h1>
        <p className='uppercase text-sm text-cyan p-1 rounded bg-gray-100'>{coinData.symbol}</p>
      </div>
      <div className='flex justify-between mt-2'>
        <div  className='flex flex-col'>
              <label className='text-gray-100'>Price</label>
              <h1 className='text-lg font-semibold'>
                  {new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: currency
                  }).format(coinData.market_data.current_price[currency])}
              </h1>
          </div>
        <p className='bg-gray-200 text-red h-[50%] font-semi-bold items-center rounded-lg'>{Number(coinData.market_data.market_cap_change_percentage_24h).toFixed(2)}%</p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
              <label className='text-gray-100'>Market Cap</label>
              <h1 className='text-md font-semibold'>
                  {new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: currency
                  }).format(coinData.market_data.market_cap[currency])}
              </h1>
          </div>
        <div className='flex flex-col'>
            <label className='text-gray-100'>Fully Diluted Valuation</label>
            <h1 className='text-md font-semibold'>
                {new Intl.NumberFormat('en-IN', {
                 style: 'currency',
                 currency: currency
                 }).format(coinData.market_data.fully_diluted_valuation[currency])}
            </h1>
        </div>
      </div>
      <div className='flex flex-col'>
        <label className='text-gray-100'>Total Volume</label>
        <h1 className='text-md font-semibold'>
            {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency
            }).format(coinData.market_data.total_volume[currency])}
        </h1>
      </div>
      <Indicator 
      price = {coinData.market_data.current_price[currency]}
      low = {coinData.market_data.low_24h[currency]}
      high = {coinData.market_data.high_24h[currency]}
      />
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
              <label className='text-gray-100'>Low 24H</label>
              <h1 className='text-md font-semibold'>
                  {new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: currency
                  }).format(coinData.market_data.low_24h[currency])}
              </h1>
          </div>
        <div className='flex flex-col'>
            <label className='text-gray-100'>High 24H</label>
            <h1 className='text-md font-semibold'>
                {new Intl.NumberFormat('en-IN', {
                 style: 'currency',
                 currency: currency
                 }).format(coinData.market_data.high_24h[currency])}
            </h1>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
              <label className='text-gray-100'>Max Supply</label>
              <h1 className='text-md font-semibold'>
                  {new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: currency
                  }).format(coinData.market_data.max_supply)}
              </h1>
          </div>
        <div className='flex flex-col'>
            <label className='text-gray-100'>Circulating Supply</label>
            <h1 className='text-md font-semibold'>
                {new Intl.NumberFormat('en-IN', {
                 style: 'currency',
                 currency: currency
                 }).format(coinData.market_data.circulating_supply)}
            </h1>
        </div>
        
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col mt-6 space-y-1'>
          <a className='bg-gray-200 rounded-lg' href={coinData.links.homepage[0]}>{coinData.links.homepage[0].substring(0,30)}</a>
          <a className='bg-gray-200 rounded-lg' href={coinData.links.blockchain_site[1]}>{coinData.links.blockchain_site[1].substring(0,30)}</a>
          <a className='bg-gray-200 rounded-lg' href={coinData.links.official_forum_url[0]}>{coinData.links.official_forum_url[0]}</a>
        </div>
        
      </div>
    </div>
  )
}

export default Left;
