
import React from 'react'
import IngredientsAnimation from './IngredientsAnimation'
import styles from './/introSection.module.css'
import AiButton from './AiButton'

const IntroSection = () => {
  return (
    <>
      <div className='grid-col-1 gap-1'>
        <div className='intro-grid-col-2 grid-row-height'>
          <div>
            <h1 className='h1 mulish-reg margin-none'>Construct a <span className='text-color-green'>savory</span> culinary masterpiece</h1>
            <h3 className='h3 mulish-light'>Blend creativity with precision to deliver delightful dishes tailored to your unique palate and lifestyle</h3>
            <AiButton/>
          </div>
          <div>
            <IngredientsAnimation/>
          </div>
        </div>

      
      </div>

        
    </>
    
  )
}

export default IntroSection