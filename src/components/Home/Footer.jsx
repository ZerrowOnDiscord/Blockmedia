import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Logo } from '../../assets'
import { IoMail } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='pt-20'>
        <button className='relative md:max-w-[1050px] md:px-10 w-[95%] mx-auto uppercase flex items-center font-bold text-darkBlue border border-black rounded-3xl transition-transform hover:scale-105 duration-300 mb-20'>
            <h1 className='text-center w-full ss:text-[80px] text-[70px] md:flex md:items-center'>
                Entrons <span className='special px-2'>en contact</span> <FaArrowUp className='inline-block rotate-45 text-iconBlue md:translate-y-1'/>
            </h1>
        </button>
        <div className='md:max-w-[1050px] flex md:justify-between md:flex-row flex-col mx-auto mb-20'>
            <img src={Logo} alt="Logo" className='h-[40px] w-[200px] mb-10'/>
            <div className='md:pl-0 pl-2'>
                <h1 className='font-bold uppercase font-arimo text-[18px] mb-5'>Nous contacter</h1>
                <p className='font-poppins flex items-center text-iconBlue font-semibold text-[15px]'><IoMail className='mr-1'/> hello@blockmedia.fr</p>
            </div>
            <div/>
            <div/>
        </div>
        <div className='md:max-w-[1050px] mx-auto md:text-start text-center'>
            <div className='w-full h-[1px] bg-gray-300 mb-5'/>
            <p className='mb-5 font-poppins'>© 2023 BlockMedia</p>
        </div>
    </div>
  )
}

export default Footer