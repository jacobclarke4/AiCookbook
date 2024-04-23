import React from 'react'
import InstructionElement from './InstructionElement'
import soup from '@/public/soup.svg'
import ingredients from '@/public/ingredients.svg'
import utensils from '@/public/utensils.svg'
import charcuterie from '@/public/charcuterie.svg'
import logo from '@/public/logo.png'
const InstructionSection = () => {
  return (
    <div className='grid-col-1 gap-half'>
        <div className='grid-stagger-1 gap-half'>
    
            <InstructionElement 
                heading='Recipe Generator' 
                description="Quickly discover new recipes and culinary ideas tailored to your prefereneces." 
                bgColor='bg-green'
                bgImage= {soup.src}
            />
            <InstructionElement 
                heading='Ingredient Substitution' 
                description="Learn alternative ingredients that can be substituted with what's on hand to accommodate your dietary requirements." 
                bgColor='bg-yellow'
                bgImage= {ingredients.src}
            />

        </div>
        <div className='grid-stagger-2 gap-half'>
            <InstructionElement 
                heading='Cooking Tips' 
                description="Select the appropriate equipment for any culinary task to achieve the best results." 
                bgColor='bg-red'
                bgImage= {utensils.src}
            />
            <InstructionElement 
                heading='Flavor Pairings' 
                description="Unlock new and interesting flavor combinations to sartisfy your taste buds." 
                bgColor='bg-blue'
                bgImage= {charcuterie.src}
            />
        </div>
    </div>
    )
}

export default InstructionSection