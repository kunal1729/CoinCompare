import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import { useContext } from 'react'; 
import Left from './Left';
import Right from './Right';


const CryptoDetails = () => {

  const {coinId} = useParams();
  const {getCoinData} = useContext(CryptoContext);
  let navigate = useNavigate();

  useLayoutEffect(() => {
    getCoinData(coinId)
    },[coinId])

  const closePortal = () => 
  {
    navigate("..");
  }
  
  return ReactDOM.createPortal(
    <div onClick={closePortal} className='text-gray-100 bg-gray-300 fixed top-0 h-full justify-center w-full bg-opacity-30 backdrop-blur-sm'>
      <div onClick={(e) => e.stopPropagation()} className=' text-white bg-gray-300 m-auto items-center my-12 w-[80%] h-[90%] border-2 border-gray-200 overflow-scroll'>
        <div className='flex flex-col items-center lg:flex-row w-full h-full justify-between p-4 '>
          <Left/>
          <Right coinId = {coinId} />
        </div>
      </div>
    </div>, document.getElementById("model")
  )
}

export default CryptoDetails;
