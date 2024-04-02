import Link from 'next/link'
import React from 'react'
const SideBar = () => {
  return (
    <div>
        <h1>LOGO</h1>
        <div>
            <ul>
                <li><Link href='#'>Home</Link></li>
                <li><Link href='#'>Create Recipe</Link></li>
                <li><Link href='#'>My Nook</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar