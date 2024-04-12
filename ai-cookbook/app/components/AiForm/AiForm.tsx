'use client'
import React, { useRef, useState } from 'react'
import send from '@/public/send.svg'
const AiForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [userInput, setUserInput] = useState<string>('');
  const [isInput, setIsInput] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);


  const focusInput = () => {
    if (inputRef.current)
    {
      inputRef.current.focus();
    }
  };

  const resetForm = () => {
    setUserInput('');
    setIsInput(false);
    setIsDisabled(true);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setUserInput(value);
    setIsInput(value.trim() != '' ? true: false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput.trim() !== '') 
    {
      resetForm();
      try {
        const response = await fetch('/api/generate', {            
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userInput}),
          
        });
        console.log(JSON.stringify({userInput}));
        if (response.ok) {
          const data = await response.json();
          console.log('Form submitted successfully:', data);
        }
        else {

          console.error('Failed to submit form:', response.statusText);
        }
      }
      catch (error) {
        console.error('Error submitting form:', error);
      }
      
    }
  };

  return (
    <div className='form-parent flex-center p-quarter grid-col-1 gap-third border-grey rounded' onClick={focusInput}>
        <form onSubmit={handleSubmit} className='flex'>
            <input 
              value={userInput}
              onChange={handleChange}
              ref={inputRef} 
              className='flex-1 p border-none' 
              name='user_Input' 
              placeholder='What kind of recipe would you like?' 
              type='text' 
              maxLength={200}>
            </input>
            <button type='submit' className={`send-btn p rounded bg-${isInput && !isDisabled ? 'green':'grey'} ${isDisabled ? '' :'pointer'}`} disabled={isDisabled}> 
              <img className='send-svg' src={send.src} alt="Send" />
            </button>
        </form>
        <div className='flex-end p mulish-light'>0/200</div>
    </div>
  )
}

export default AiForm