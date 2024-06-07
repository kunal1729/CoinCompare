import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    
      <header className="h-20 pt-4 pl-2 pr-2 flex items-center justify-between">
            <Logo/>
            <Navigation/>
      </header>
    
  )
}

export default Navbar
