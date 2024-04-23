import React from 'react'
import soup from '@/public/soup.svg'
import { url } from 'inspector';
interface Props {
    heading: string;
    description: string;
    bgColor?: string;
    bgImage?: string;
}
const InstructionElement1 = () => {
  return (
    <div className={`instruction-element p-half rounded bg-green`}>
        <div className='grid-col-1'>
            <div>
                <h3 className='h3 mulish-bold text-color-white margin-none'>Recipe Generator</h3>
                <p className='p mulish-light text-color-white'>cgbgcbbcbcbcbbb</p>
            </div>
            <div className='bg-white rounded'>
                <img src={soup.src}></img>
            </div>
        </div>
    </div>
  )
}

export default InstructionElement1