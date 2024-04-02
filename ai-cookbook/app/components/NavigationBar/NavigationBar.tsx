import React from 'react'
import NavLink from '../NavLink'
import LoginButton from '../LoginButton'

const NavigationBar = () => {
  return (
    <header>
      <div className='flex-space gap width-100 height-100'>
        <div>LOGO</div>
        <div className='flex-center gap width-100 height-100'>        
          <NavLink linkTitle='Recipes'/>
          <NavLink linkTitle='Recipes'/>
          <NavLink linkTitle='Recipes'/>
        </div>
        <div className='flex-end width-100 height-100'>
          <LoginButton></LoginButton>
        </div>

      </div>
    </header>
  )
}

export default NavigationBar