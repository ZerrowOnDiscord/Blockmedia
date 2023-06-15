import React from 'react'
import { Hero } from '../../assets'
import { FaArrowUp } from 'react-icons/fa'
import { TfiMouseAlt } from 'react-icons/tfi'

const Header = () => {
  return (
    <div className="md:px-20 flex flex-col items-center mt-20 relative">
        <div className="flex uppercase text-center text-darkBlue font-bold md:text-[80px] sm:text-[60px] text-[50px] font-arimo break-all">
            <h1>Vous faire <span className='special'>Rayonner</span><br/>Audacieusement <FaArrowUp className='rotate-45 inline-block -translate-y-2 text-iconBlue'/></h1>
        </div>
        <div className='relative xl:w-[60%] md:w-[80%] w-[100%]'>
            <img src={Hero} alt="" className='w-[100%]' />
            <button className='absolute uppercase font-poppins md:px-9 md:py-10 px-5 py-6 border-black rounded-full border-2 top-0 bg-white left-[50%] -translate-x-[50%]'>Play</button>
        </div>
        <div className='absolute -bottom-5 w-full flex flex-col items-center font-poppins'>
            <h1 className="vertical uppercase text-black">Sroll</h1>
            <div className='relative before:absolute before:w-[5px] before:top-4 before:left-[50%] before:-translate-x-[50%] before:h-[5px] before:rounded-full before:bg-iconBlue before:animate-scroll-anim'>
                <TfiMouseAlt className='mt-3 text-iconBlue' size={30} />
            </div>
        </div>
        <div className='-z-[1] bg-purple-300 h-[50%] w-[40%] absolute rounded-full blur-[200px] bottom-[200px] left-[15%]'></div>
        <div className='-z-[1] bg-blue-300 h-[50%] w-[40%] absolute rounded-full blur-[200px] bottom-[100px] right-[15%]'></div>
    </div>
  )
}

export default Header