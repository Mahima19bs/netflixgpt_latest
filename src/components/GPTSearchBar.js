import React from 'react'
import { useSelector } from 'react-redux';
const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const language_name = selectedLanguage.message;
  const language_placeholder = selectedLanguage.placeholder;
  return (

    <div className='flex justify-center px-4 pt-[20vh]'>
      <form className='grid w-full max-w-3xl grid-cols-12 gap-2 rounded-lg bg-black/80 p-3'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={ language_placeholder}/>
        <button className='py-2 m-4 px-4 col-span-3 bg-red-700 text-white rounded-lg'>{language_name}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
