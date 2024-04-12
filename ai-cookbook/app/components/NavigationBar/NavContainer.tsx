import React from 'react'
import NavLink from './NavLink'

const NavContainer = () => {
  return (
    <div className='flex-center gap-1 height-100 mulish-light'>        
        <NavLink linkTitle='Kitchen'/>
        <NavLink linkTitle='Bookshelf'/>
        <NavLink linkTitle='Nook'/>
    </div>
  )
}

export default NavContainer