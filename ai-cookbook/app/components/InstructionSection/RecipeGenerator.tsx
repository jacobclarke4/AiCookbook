import React from 'react'
import soup from '@/public/soup.svg'
import ingredients from '@/public/ingredients.svg'
import utensils from '@/public/utensils.svg'
import charcuterie from '@/public/charcuterie.svg'
const RecipeGenerator = () => {
  return (
    <div className={`instruction-element p-half rounded bg-green`}>
        <div className='grid-col-1'>
            <div>
                <h3 className='h3 mulish-bold text-color-white margin-none'>Ingredient Substitution</h3>
                <p className='p mulish-light text-color-white'>Learn alternative ingredients that can be substituted with what's on hand to accommodate your dietary requirements.</p>
            </div>
            <div className='instruction-image-container bg-white rounded'>
                <img  className='instruction-image-card' src= {soup.src}></img>
                
            </div>
        </div>
    </div>
  )
}

export default RecipeGenerator