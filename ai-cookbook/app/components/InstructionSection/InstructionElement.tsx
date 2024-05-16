import React from 'react'
import soup from '@/public/soup.svg'
import ingredients from '@/public/ingredients.svg'
import utensils from '@/public/utensils.svg'
import charcuterie from '@/public/charcuterie.svg'

interface Props {
    heading: string;
    description: string;
    bgColor?: string;
    darkBgColor?: string | "white"
    bgImage?: string;
}
const InstructionElement = (props:Props) => {

    return (
        <div className={`p-half rounded ${props.bgColor || ''}`}>
                <div>
                    <h3 className='h3 mulish-bold text-color-white margin-none'>{props.heading}</h3>
                    <p className='p mulish-light text-color-white'>{props.description}</p>
                </div>
                <div className={`instruction-image-container ${props.darkBgColor || "bg-white"} rounded`}>
                    <img  className='instruction-image-card' src= {props.bgImage}></img>
                </div>
        </div>
    )
}

export default InstructionElement