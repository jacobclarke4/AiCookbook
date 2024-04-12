import Link from 'next/link';
import React from 'react'

interface Props {
    linkTitle: string;
}
const NavLink = (props : Props) => {
  return (
    <Link href='#' className=' flex-center nav-link p mulish-light height-100'>{props.linkTitle}</Link>
  )
}

export default NavLink