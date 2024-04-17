'use client'
import React, { useState } from 'react'
import Output from './Output';
import AiForm from './AiForm';

const AiSection = () => {

    const [InputOutputData, setInputOutputData] = useState<any[]>();
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const handleFormSubmit = async (formData: any) => {
      try {
        setIsFormDisabled(true); // Disable form submission while waiting for response
        const response = await fetch('/api/generate', {            
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Form submitted successfully:', data);
          const responseData = data.response;
          setInputOutputData(prevData => [...(prevData || []), responseData]); // Add new data to the array
        } else {
          console.error('Failed to submit form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
      finally {
        setIsFormDisabled(false); // Re-enabale form submission after response is received
      }
    };
  return (
    <div className='grid-col-1'>
        <Output data={InputOutputData || []}/>
        <AiForm submit={handleFormSubmit} isFormDisabled={isFormDisabled}/>
    </div>
  )
}

export default AiSection