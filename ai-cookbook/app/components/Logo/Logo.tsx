import React from 'react'
import logo from '@/public/logo.svg'
const Logo = () => {
  return (
      <a href='/' className='logo anchor'>
        <img className='logo'src={logo.src} alt='Cook Nook'/>
      </a>
  )
}

export default Logo