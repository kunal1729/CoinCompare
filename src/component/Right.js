import React from 'react'
import Charts from './Charts';
import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import facebook from '../assets/facebook-fill.svg'
import github from '../assets/github-fill.svg';
import reddit from '../assets/reddit-fill.svg'
import twitter from '../assets/twitter-circle-filled.svg'

const Right = ({coinId}) => {

  const {coinData} = useContext(CryptoContext);

  return (
    <div className='pl-2 lg:pl-12 mb-10 p-12 relative flex flex-col w-full pr-8 lg:w-[55%] h-full'>
      <Charts coinId = {coinId} />
      <div className='absolute flex flex-col lg:flex-row lg:items-center lg:space-x-2 bottom-0 space-y-2 right-8' >
        <a href={coinData.links.repos_url.github[0]}>         
          <img className='w-10 h-10' src={github} />
        </a>
        <a href={`https://facebook.com/${coinData.links.facebook_username}`}>
          <img className='w-10 h-10' src={facebook} />
        </a>
        <a href={coinData.links.subreddit_url}>
          <img className='w-10 h-10' src={reddit} />
        </a>
        <a href={`https://twitter.com/${coinData.links.twitter_screen_name}`}>
          <img className='w-10 h-10' src={twitter} />
        </a>
      </div>
    </div>
  )
}

export default Right;
