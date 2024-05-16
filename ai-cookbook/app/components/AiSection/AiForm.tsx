'use client'
import React, { useRef, useState } from 'react'
import send from '@/public/send.svg'

interface Props {
  submit: (formData: any) => void;
  isFormDisabled: boolean;
}

const AiForm = (props: Props) => {
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
    setIsDisabled(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setUserInput(value);
    setIsInput(value.trim() != '' ? true: false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput.trim() !== '' && !props.isFormDisabled) 
    {
      props.submit({userInput});
      resetForm();
    }
    
  };


  return (
    <div className='sticky-form bg-white form-parent p-quarter grid-col-1 gap-third border-grey rounded' onClick={focusInput}>
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
            <button type='submit' className={`send-btn p rounded bg-${isInput && !props.isFormDisabled ? 'green':'grey'} ${props.isFormDisabled ? '':'pointer'}`} disabled={isDisabled}> 
              <img className='send-svg' src={send.src} alt="Send" />
            </button>
        </form>
        <div className='flex-end p mulish-light'>0/200</div>
    </div>
  )
}

export default AiForm