import React, { useState } from 'react'
import { useEffect } from 'react';

const Indicator = ({price, high, low}) => {
  
  const [green, setGreen] = useState(0);

  useEffect(() => {

    const percent = (high - price) * 100 / (high - low);
    setGreen(Math.ceil(percent));
  }, [price, high, low])
  
  
  return (
    <div className='w-full flex'>
      <span className='bg-red w-[50%] rounded-l-xl' style={{width: `${100 - green}%`}}>&nbsp;</span>
      <span className='bg-cyan w-[50%] rounded-r-xl ' style={{width: `${green}%`}}>&nbsp;</span>
    </div>
  )
}

export default Indicator
