import React, {useContext} from 'react'
import { useState } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import debounce from 'lodash.debounce';

const SearchInput = ({handleSearch}) =>
{
  const [search, setSearch] = useState("");
  const {searchData, setCoinSearch, setSearchData} = useContext(CryptoContext);
  
  const handleInput = (e) =>
  {
    e.preventDefault();
    let query = e.target.value;
    setSearch(query);
    handleSearch(query);
  }
  const selectCoin = (coin) =>
  {
    setCoinSearch(coin);
    setSearchData({});
    setSearch("");
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    search === searchData[0].name ? selectCoin(searchData[0].id) : alert("No resurl found !") ;  
    
  }
   
  return (
    <div className='relative flex flex-col'>
    <form onSubmit={handleSubmit} className=' w-[70%] relative items-center flex mx-auto '>
      <input value={search} onChange={handleInput} className=' focus:border-cyan border-2 border-cyan text-white w-full rounded-lg bg-gray-200' placeholder='Search crypto...' type="text" />
      <button type='submit' >
        <svg className=' text-white absolute bottom-2 right-2 w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path stroke-linecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </form>
      {search.length > 0 && searchData && searchData.length > 0 ?
        <ul className=' z-10 bg-gray-200 absolute top-11 left-[15%] align-middle w-[70%] h-72 items-center border-white text-white block-flex flex-col overflow-x-hidden '>
          {
            searchData.map((coin) => {
              return(
                <li onClick={() => selectCoin(coin.id)} key={coin.id} className='p-1 flex items-center space-x-2  cursor-pointer hover:bg-gray-100 '>
                  <img className=' w-6 h-6' src={coin.thumb} alt='bitcoin'></img>                  
                  <h1> {coin.name} </h1> 
                </li>
              )
            }) 
          }
        </ul>
        
        : null
       }
      
    </div>
)
}

const Search = () => {
  let {getSearchData} = useContext(CryptoContext); 

  const debounceFunc = debounce(function(val) {
    getSearchData(val);
  }, 1000);
  return(
    <>
      <SearchInput handleSearch = {debounceFunc} />
    </>
  )  
}

export default Search
