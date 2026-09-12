import React from 'react'
import { useSelector } from 'react-redux';
import GPTSearchBar from './GPTSearchBar.js';
import GPTSuggestions from './GPTSuggestions.js';

const GPTSearch = () => {
 
  const backgroundImage = './background.jpg';
  return (
    <div
      className='relative min-h-screen w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-black/70' />
      <div className='relative z-10 min-h-screen'>
        <GPTSearchBar />
        <GPTSuggestions />
      </div>
    </div>
  )
}

export default GPTSearch
