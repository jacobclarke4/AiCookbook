
import React from 'react'
import IngredientsAnimation from './IngredientsAnimation'
import styles from './/introSection.module.css'

const IntroSection = () => {
  return (
    <section>
        <div className='grid'>
            <div className={styles.introInfo}>
                <h1 className=''>Construct a <span>savory</span> masterpiece</h1>
                <h3>Blend creativity with precision to deliver delightful dishes tailored to your unique palate and lifestyle</h3>
            </div>
            <div>
                <IngredientsAnimation/>
            </div>
        </div>
        
    </section>
    
  )
}

export default IntroSection