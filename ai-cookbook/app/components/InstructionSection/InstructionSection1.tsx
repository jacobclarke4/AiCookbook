import React from 'react'
import InstructionElement from './InstructionElement'
import soup from '@/public/soup.svg'
import ingredients from '@/public/ingredients.svg'
import utensils from '@/public/utensils.svg'
import charcuterie from '@/public/charcuterie.svg'
import logo from '@/public/logo.png'
import InstructionElement1 from './InstructionElement1'
const InstructionSection1 = () => {
  return (
    <div className='grid-col-1 gap-half'>
        <div className='grid-stagger-1 gap-half'>
            <InstructionElement1/>
        </div>
        <div className='grid-stagger-2 gap-half'>
        </div>
    </div>
    )
}

export default InstructionSection1