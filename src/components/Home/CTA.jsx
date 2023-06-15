import React from 'react'
import Carousel from './Carousel'

const CTA = () => {
  return (
    <div className="px-2 my-[200px]">
        <h1 className='flex items-center'>
            <div className='w-full h-[1px] bg-black inline-block'></div>
            <span className='whitespace-nowrap uppercase text-iconBlue text-[18px] font-arimo font-bold inline-block px-5'>Ils nous font confiance</span>
            <div className='w-full h-[1px] bg-black inline-block'></div>
        </h1>
        <Carousel/>
    </div>
  )
}

export default CTA