import React from 'react'
import LoginButton from './LoginButton'
import Logo from '../Logo/Logo'
import NavContainer from './NavContainer'
import SearchForm from './SearchForm'

const NavigationBar = () => {

  return (
    <div className='nav-bar flex-space gap-1'>
      <div className='flex gap-1'>
        <Logo/>
        <SearchForm/>
      </div>
      <div className='flex-end gap-1'>
        <NavContainer/>
        <LoginButton/>
      </div>
    </div>
  )
}

export default NavigationBar