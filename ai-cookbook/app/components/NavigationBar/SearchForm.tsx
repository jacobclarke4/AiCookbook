'use client'
import React, { useState } from 'react'

const SearchForm = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
      setIsFocused(true);
    }
    const handleInputBlur = () => {
      setIsFocused(false);
    }

  return (
    <div className='flex-center'>
        <form className={`flex rounded search-bar border-${isFocused ? 'green' : 'grey'}`}>
            <input 
            className='flex-1 p border-none mulish-reg' 
            placeholder='Search recipes' 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}>
            </input>
            <span className="material-symbols-outlined text-color-green">search</span>
        </form>
  </div>
  )
}

export default SearchForm