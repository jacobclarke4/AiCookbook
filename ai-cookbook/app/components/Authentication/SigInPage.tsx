'use client'
import React from 'react'
import IngredientsAnimation from '../IntroSection/IngredientsAnimation'
import SignInForm from './SignInForm'
import KitchenAnimation from '../IntroSection/KitchenAnimation'
import { signIn, signOut, useSession } from 'next-auth/react'
import { ClipLoader } from 'react-spinners'
const SigInPage = () => {
    const {data:session, status} = useSession();

    // Check if the session status is still loading
    if (status === 'loading')
    {
        return <ClipLoader color='#8AC926'/>; // Return the spinner while loadingreturn null;
    }

  return (
    <> 
        <div className="grid-col-1 signin-page flex-align">
            <div className='intro-grid-col-2 gap-half grid-row-height flex-align'>
                <div>
                    <KitchenAnimation/>
                </div>
                <div>
                    {session ? (
                        <div>
                        </div>
                    ):
                        <SignInForm/>
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default SigInPage