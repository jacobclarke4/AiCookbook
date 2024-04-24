import React from 'react'
import soup from '@/public/soup.svg'
import ingredients from '@/public/ingredients.svg'
import utensils from '@/public/utensils.svg'
import charcuterie from '@/public/charcuterie.svg'
const IngredientSubsitution = () => {
  return (
    <div className={`instruction-element p-half rounded bg-yellow`}>
        <div className='grid-col-1'>
            <div>
                <h3 className='h3 mulish-bold text-color-white margin-none'>Recipe Generator</h3>
                <p className='p mulish-light text-color-white'>Quickly discover new recipes and culinary ideas tailored to your prefereneces.</p>
            </div>
            <div className='instruction-image-container bg-white rounded'>
                <img  className='instruction-image-card' src= {ingredients.src}></img>
                
            </div>
        </div>
    </div>
  )
}

export default IngredientSubsitution