import React from 'react'
import SignInForm from '../components/Authentication/SignInForm'
import IngredientsAnimation from '../components/IntroSection/IngredientsAnimation'
import SigInPage from '../components/Authentication/SigInPage'

const SignInPage = () => {

  return (
    <main>
      <div className="max-width margin-auto"> 
        <section>
            <SigInPage/>
        </section>
      </div>
    </main>
  )
}

export default SignInPage