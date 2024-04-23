
import React from 'react'
import LoginButton from './LoginButton'
import Logo from '../Logo/Logo'
import LinkContainer from './LinkContainer'
import SearchForm from './SearchForm'


const NavigationBar = () => {

  return (
    <div className='nav-bar flex-space gap-1'>
      <div className='flex-center gap-1'>
        <Logo/>
        <LinkContainer/>
      </div>
      <div className='flex-center gap-1'>  
        <SearchForm/>
        <LoginButton/>
      </div>
    </div>
  )
}

export default NavigationBar