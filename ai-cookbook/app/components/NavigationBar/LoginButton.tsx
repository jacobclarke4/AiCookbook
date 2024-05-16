'use client'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ClipLoader } from 'react-spinners'
import { auth } from '@/auth'

const  LoginButton = () => {
  const {data:session, status, update} = useSession();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter(); // Initialize useRouter

  console.log("session", session);
  const user = session?.user;

  console.log("SESSION USER", user);
  const handleMouseEnter = () => {
      setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
      setIsMenuVisible(false);
  };
  // Check if the session status is still loading
  if (status === 'loading') {
    return <ClipLoader color='#8AC926'/>; // Return the spinner while loading
  }
  return (
    <>
      {session ? (
        <>
          <div className='user-img-container' onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <img 
              src={session.user?.image as string} 
              className='all-round user-img pointer'
            />
            {isMenuVisible && (
              <div className='grid-col-1 p-quarter gap-half user-options-menu bg-white rounded shadow'>
                <div>
                  <p className='p margin-none mulish-reg'>{session.user?.name ? `${session.user.name}`: ''}</p>
                  <p className='p margin-none mulish-reg'>{session.user?.email ? `${session.user.email}`: ''}</p>
                </div>
                <button onClick={()=>signOut()} className='btn btn-hoverable pointer h3 mulish-bold bg-green rounded text-color-white'>Sign out</button>
              </div>
            )}
          </div>
        </>
      ) :
        <div className='flex-end height-100'>
          <button onClick={()=> router.push('/signin')}className='btn pointer h3 mulish-bold bg-green rounded text-color-white'>Sign In</button>
        </div>
      }
    </>
  
        
  )
}

export default LoginButton