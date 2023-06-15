import React from 'react'
import { ser1, ser2, ser3 } from '../../assets'
import { FaArrowUp } from 'react-icons/fa'
import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Services = () => {
  const [firstArrow, setFirstArrow] = useState(false)
  const [secondArrow, setSecondArrow] = useState(false)
  const [thirdArrow, setThirdArrow] = useState(false)

  return (
    <div className="bg-gray-100 w-full max-w-[1700px] mx-auto font-arimo pt-[200px] text-[50px] font-bold text-darkBlue leading-[50px]">
      <div className='max-w-[1310px] mx-auto'>
      <h1 className='uppercase'>S'adresser À la<br/><span className='special'>nouvelle gÉNÉration</span></h1>
        <div className="flex md:justify-between md:flex-row flex-col items-center pb-20">
          <div className='max-w-[410px] mb-5 md:mb-0 relative before:w-full before:h-full before:z-[10] before:bg-white before:duration-300 before:absolute before:top-0 before:left-0 before:transition-transform ease-in-out before:rounded-3xl before:scale-x-0 hover:before:scale-x-100 before:origin-right before:hover:origin-left' onMouseEnter={() => setFirstArrow(true)} onMouseLeave={() => setFirstArrow(false)}>
            <img src={ser1} className='w-full h-full rounded-3xl' />
            { firstArrow && (
              <FaArrowUp className='z-[11] rotate-45 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-iconBlue animate-arrow-appear' size={100} />
            )}
            <div className='absolute w-full bottom-10 text-center text-[25px] text-iconBlue'>
              <h1>Influence & Brand content <FiArrowRight className="inline-block"/></h1>
            </div>
          </div>
          <div className='max-w-[410px] mb-5 md:mb-0 relative before:w-full before:h-full before:z-[10] before:duration-300 before:bg-white before:absolute before:top-0 before:left-0 before:transition-transform ease-in-out before:rounded-3xl before:scale-x-0 hover:before:scale-x-100 before:origin-right before:hover:origin-left' onMouseEnter={() => setSecondArrow(true)} onMouseLeave={() => setSecondArrow(false)}>
            <img src={ser2} className='rounded-3xl' />
            { secondArrow && (
              <FaArrowUp className='z-[11] rotate-45 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-iconBlue animate-arrow-appear' size={100} />
            )}
            <div className='absolute w-full bottom-10 text-center text-[25px] text-iconBlue'>
              <h1>Evenement Minecraft <FiArrowRight className="inline-block"/></h1>
            </div>
          </div>
          <div className='max-w-[410px] mb-5 md:mb-0 relative before:w-full before:h-full before:z-[10] before:bg-white before:duration-300 before:absolute before:top-0 before:left-0 before:transition-transform ease-in-out before:rounded-3xl before:scale-x-0 hover:before:scale-x-100 before:origin-right before:hover:origin-left' onMouseEnter={() => setThirdArrow(true)} onMouseLeave={() => setThirdArrow(false)}>
            <img src={ser3} alt="" className='rounded-3xl' />
            { thirdArrow && (
              <FaArrowUp className='z-[11] rotate-45 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-iconBlue animate-arrow-appear' size={100} />
            )}
            <div className='absolute w-full bottom-10 text-center text-[25px] text-iconBlue'>
              <h1>Communaute discord <FiArrowRight className="inline-block"/></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services