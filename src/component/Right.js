import React from 'react'
import Charts from './Charts';
import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const Right = ({coinId}) => {

  const {coinData} = useContext(CryptoContext);

  return (
    <div className='pl-2 lg:pl-12 mb-10 p-12 relative flex flex-col w-full pr-8 lg:w-[55%] h-full'>
      <Charts coinId = {coinId} />
    </div>
  )
}

export default Right;
