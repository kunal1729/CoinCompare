import React from 'react'
import { CryptoContext } from '../context/CryptoContext'
import { useContext } from 'react'

const Sort = () => {

  const {setOrder} = useContext(CryptoContext);
  
  const handleSort = (e) => {
    e.preventDefault();
    setOrder(e.target.value);    
  }
 
  return (
    <div className='z-0 '>
      
      <label className=' ml-2 font-bold uppercase'>Sort by:</label> 
      <select onClick={handleSort} className=' focus:border-cyan  border-2 border-cyan text-white rounded-lg bg-gray-200 m-2 w-72 relative items-center flex mx-auto' name='sortBy'>
        <option value='market_cap_desc'> market_cap_desc</option>
        <option value='market_cap_asc'>market_cap_asc</option>
        <option value='volume_asc'>volume_asc</option>
        <option value='volume_desc'>volume_desc</option>
        <option value='id_asc'>id_asc</option>
        <option value='id_desc'>id_desc</option>
        
      </select>
    </div>
  )
}

export default Sort
