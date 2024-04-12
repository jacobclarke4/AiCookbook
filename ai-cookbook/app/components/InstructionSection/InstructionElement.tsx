import React from 'react'
interface Props {
    heading: string;
    description: string;
    bgColor?: string;
    bgImage?: string;
}
const InstructionElement = (props:Props) => {
    console.log('Background Image:', props.bgImage);
    const divStyle = {
        backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none',
    };

  return (
    <div className={`instruction-element p-half rounded ${props.bgColor || ''}`}>
        <div className='grid-col-1'>
            <div>
                <h3 className='h3 mulish-bold text-color-white margin-none'>{props.heading}</h3>
                <p className='p mulish-light text-color-white'>{props.description}</p>
            </div>
            <div >
                <div className={`${props.bgColor || ''} rounded instruction-image bg-white`} style={divStyle}></div>
            </div>
        </div>
    </div>
  )
}

export default InstructionElement