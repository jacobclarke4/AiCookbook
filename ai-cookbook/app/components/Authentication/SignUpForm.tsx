import React from 'react'

const SignUpForm = () => {
  return (
    <div>
        <form className="grid-col-1 gap-third p mulish-light">
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    id='username' 
                    name='username' 
                    placeholder='Username'>
                </input>
            </div>
            <div>
                <label htmlFor="email">Username</label>
                <input 
                    id='email' 
                    name='email' 
                    placeholder='Email'>
                </input>
            </div>
            <div>
                <label htmlFor="password">Psername</label>
                <input 
                    id='password' 
                    name='password' 
                    placeholder='Password'>
                </input>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm