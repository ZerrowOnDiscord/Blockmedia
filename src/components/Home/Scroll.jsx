import React from 'react'
import { FaStar } from 'react-icons/fa'
import Marquee from "react-fast-marquee";

const Scroll = () => {
  return (
    <div className="py-[70px] border-b-[1px] border-t-[1px] border-black flex">
        <Marquee pauseOnHover={true}>
            <div className='font-bold uppercase text-darkBlue px-2 md:text-[75px] text-[70px]'>
                <h1 className='flex items-center'>
                    Campagnes <span className='special px-2'>Percutantes</span> <FaStar className='inline-block text-iconBlue'/>
                </h1>
            </div>
            <div className='font-bold uppercase text-darkBlue md:text-[75px] text-[70px]'>
                <h1 className='flex items-center'>
                    Influence <span className='special px-2'>creative</span> <FaStar className='inline-block text-iconBlue'/>
                </h1>
            </div>
        </Marquee>
    </div>
  )
}

export default Scroll