import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className=" items-center font-nunito w-[50%] flex border rounded-md border-cyan justify-around m-auto">
      <NavLink className= {({ isActive }) => {
          return `w-[30%] text-center m-1 p-1 rounded-md font-bold  
          ${ 
            isActive 
              ? "bg-cyan text-gray-300" 
              : 'text-gray-100 bg-gray-200 hover:text-cyan active:bg-cyan active:text-gray-300 ' 
            }`;
          }} to={"/crypto"}>Crypto</NavLink>
      <NavLink className= {({ isActive }) => {
          return `w-[30%] text-center m-1 p-1 rounded-md font-bold  
          ${ 
            isActive 
              ? "bg-cyan text-gray-300" 
              : 'text-gray-100 bg-gray-200 hover:text-cyan active:bg-cyan active:text-gray-300 ' 
            }`;
          }} to={"/trending"}>Trending</NavLink>
      <NavLink className= {({ isActive }) => {
          return `w-[30%] text-center m-1 p-1 rounded-md font-bold  
          ${ 
            isActive 
              ? "bg-cyan text-gray-300" 
              : 'text-gray-100 bg-gray-200 hover:text-cyan active:bg-cyan active:text-gray-300 ' 
            }`;
          }} to={"/saved"}>Saved</NavLink>
    </nav>
  )
}

export default Navigation;
