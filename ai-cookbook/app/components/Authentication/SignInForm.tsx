'use client'
import React, { useRef, useState } from 'react'
import { signIn } from 'next-auth/react';


const  SignInForm = () => {
    const emailUsername = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null);

    const email = useRef<HTMLInputElement>(null)
    const username = useRef<HTMLInputElement>(null);

    const [isSignUp, setIsSignUp] = useState(false);

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };
    const handleInputBlur = () => {
        setIsFocused(false);
    };

    const handleSignInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let user = await signIn("credentials", {
            emailUsername:emailUsername.current?.value, 
            password: password.current?.value,
            redirect: false,
            callbackUrl: "http://localhost:3000",
        });
        console.log(JSON.stringify(user));
    };
    const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const usernameValue = username.current?.value;
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;
    
        if (!usernameValue || !emailValue || !passwordValue) {
            // Handle missing fields, e.g., show an error message
            return;
        }
    
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usernameValue,
                    email: emailValue,
                    password: passwordValue,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Registration failed');
            }
    
            const data = await response.json();
            if (data.success) {
                // Redirect or show a success message
                console.log('Registration successful');
                // You can redirect the user here, e.g., using Next.js's useRouter
            } else {
                // Handle registration failure, e.g., show an error message
                console.error('Registration failed:', data.error);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle the error, e.g., show an error message
        }
    };
    return (
        <div>
            {!isSignUp ? (
                <form onSubmit={handleSignInSubmit} className="grid-col-1 gap-third p mulish-reg">
                    <div className='grid-col-1'>
                        <label htmlFor="emailUsername"></label>
                        <div className={`flex rounded search-bar border-${isFocused ? 'green' : 'grey'}`}>
                            <input
                                className='flex-1 p border-none mulish-reg'
                                ref={emailUsername}
                                id='emailUsername' 
                                name='emailUsername' 
                                placeholder='Email or username'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}>
                            </input>
                        </div>
                    </div>
                    <div className='grid-col-1'>
                        <label htmlFor="password"></label>
                        <div className={`flex rounded search-bar border-${isFocused ? 'green' : 'grey'}`}>
                            <input 
                                type='password'
                                className='flex-1 p border-none mulish-reg'
                                ref={password}
                                id='password' 
                                name='password' 
                                placeholder='Password'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}>
                            </input>
                        </div>
                    </div> 
                    <button className='btn btn-hoverable h3 mulish-bold bg-green rounded text-color-white pointer' type='submit'>Sign In</button>
                    <h3 className='h3 center-text margin-none mulish-reg'>Don't have an account?</h3>
                    <button onClick={() => setIsSignUp(true)} className='btn btn-hoverable h3 mulish-bold bg-green rounded text-color-white pointer'>Create Account</button>
                </form>
            ):(
                <form onSubmit={handleSignUpSubmit} className="grid-col-1 gap-third p mulish-reg">
                    <div className='grid-col-1'>
                        <label htmlFor="emailUsername"></label>
                        <div className={`flex rounded search-bar border-${isFocused ? 'green' : 'grey'}`}>
                            <input
                                className='flex-1 p border-none mulish-reg'
                                ref={username}
                                id='username' 
                                name='username' 
                                placeholder='Username'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}>
                            </input>
                        </div>
                    </div>
                    <div className='grid-col-1'>
                        <label htmlFor="emailUsername"></label>
                        <div className={`flex rounded search-bar border-${isFocused ? 'green' : 'grey'}`}>
                            <input
                                className='flex-1 p border-none mulish-reg'
                                ref={email}
                                id='email' 
                                name='email' 
                                placeholder='Email'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}>
                            </input>
                        </div>
                    </div>
                    <div className='grid-col-1'>
                        <label htmlFor="password"></label>
                        <div className={`flex rounded search-bar border-${isFocused ? 'green' : 'grey'}`}>
                            <input 
                            type='password'
                                className='flex-1 p border-none mulish-reg'
                                ref={password}
                                id='password' 
                                name='password' 
                                placeholder='Password'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}>
                            </input>
                        </div>
                    </div> 
                    <button className='btn btn-hoverable h3 mulish-bold bg-green rounded text-color-white pointer' type='submit'>Create Account</button>
                    <h3 className='h3 center-text margin-none mulish-reg'>Already have an account?</h3>
                    <button onClick={() => setIsSignUp(false)} className='btn btn-hoverable h3 mulish-bold bg-green rounded text-color-white pointer'>Sign In</button>
                </form>
            )
            }
        </div>
    ) 
}

export default SignInForm