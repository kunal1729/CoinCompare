import React from 'react'
import { useRef, useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const PerPageBlock = () => {

  const {setPerPage} = useContext(CryptoContext);
  const PageRef = useRef(null); 

  const handlePerPage = (e) => 
  {
    e.preventDefault();
    let val = PageRef.current.value;
    if(val != 0)
    {
        setPerPage(val);
    }
    PageRef.current.value = null;
  }

  return (
    <div className='text-center'>
      <label className='font-bold'>Per Page : </label>  
      <form onSubmit={handlePerPage} className=' m-2 w-28  items-center flex mx-auto' >
        <input ref={PageRef} placeholder='10' min={1} max={250} className=' focus:border-cyan  border-2 border-cyan text-white w-full rounded-lg bg-gray-200' type = "number" />
         <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal text-cyan ml-2"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
         </button>
      </form>
    </div>
  )
}

export default PerPageBlock
