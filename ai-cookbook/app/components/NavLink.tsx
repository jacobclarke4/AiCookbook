import Link from 'next/link';
import React from 'react'

interface Props {
    linkTitle: string;
}
const NavLink = (props : Props) => {
  return (
    <div>
        <Link href='#' className='nav-link'>{props.linkTitle}</Link>
    </div>
  )
}

export default NavLink