import React from 'react'
import { tm1, tm2, tm3 } from '../../assets'
import { FaArrowUp, FaTwitch, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'

const Team = () => {
    const [firstContent, setFirstContent] = useState(false)
    const [secondContent, setSecondContent] = useState(false)
    const [thirdContent, setThirdContent] = useState(false)

  return (
    <div className="bg-gray-100 w-full max-w-[1700px] mx-auto font-arimo pt-[200px] text-[50px] font-bold text-darkBlue leading-[50px]">
        <div className='max-w-[1310px] mx-auto'>
            <div className='flex md:justify-between md:flex-row flex-col items-center mb-20'>
                <h1 className='uppercase mb-10 xs:text-[50px] text-[30px]'>
                    Nos influenceurs <br/> <span className='special'>Partenaires</span>
                </h1>
                <button className='uppercase text-[17px] text-black bg-white leading-normal px-10 py-5 rounded-full relative before:rounded-full before:w-[18%] before:h-[100%] before:bg-iconBlue before:absolute before:top-0 before:left-0 before:z-0 hover:before:w-full before:transition-all before:ease-out before:duration-300'>
                    <span className='z-10 relative'>Voir tous nos influenceurs</span>
                </button>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col items-center pb-20">
                <div className='mb-5 md:mb-0 relative overflow-hidden rounded-3xl w-[90%] img:max-w-[410px]' onMouseEnter={() => setFirstContent(true)} onMouseLeave={() => setFirstContent(false)}>
            <img src={tm1} className='w-full h-full rounded-3xl' />
            { firstContent && (
              <>
                <div className='flex justify-between px-10 py-3 bg-iconBlue rounded-b-3xl absolute w-full bottom-0 animate-appear-text-delay-1'>
                  <FaYoutube size={30} color='white'/>
                  <FaTwitch size={30} color='white'/>
                  <FaTwitter size={30} color='white'/>
                  <FaInstagram size={30} color='white'/>
                </div>
                <div className='absolute bottom-20 w-full leading-normal text-white text-center text-[23px]'>
                  <h1 className='animate-appear-text-delay-1'>
                    Fuze III
                  </h1>
                  <p className='uppercase font-normal font-jost text-[19px] animate-appear-text-delay-2'><span className='font-bold'>2,6M</span> sur youtube</p>
                </div>
              </>
            )}
          </div>
          <div className='mb-5 md:mb-0 relative overflow-hidden rounded-3xl img:max-w-[410px] w-[90%]' onMouseEnter={() => setSecondContent(true)} onMouseLeave={() => setSecondContent(false)}>
            <img src={tm2} className='rounded-3xl' />
            { secondContent && (
              <>
                <div className='flex justify-between px-10 py-3 bg-iconBlue rounded-b-3xl absolute w-full bottom-0 animate-appear-text-delay-1'>
                  <FaYoutube size={30} color='white'/>
                  <FaTwitch size={30} color='white'/>
                  <FaTwitter size={30} color='white'/>
                  <FaInstagram size={30} color='white'/>
                </div>
                <div className='absolute bottom-20 w-full leading-normal text-white text-center text-[23px]'>
                  <h1 className='animate-appear-text-delay-1'>
                    Siphano
                  </h1>
                  <p className='uppercase font-normal font-jost text-[19px] animate-appear-text-delay-2'><span className='font-bold'>2,3M</span> sur youtube</p>
                </div>
              </>
            )}
          </div>
          <div className='mb-5 md:mb-0 relative overflow-hidden rounded-3xl w-[90%] img:max-w-[410px]' onMouseEnter={() => setThirdContent(true)} onMouseLeave={() => setThirdContent(false)}>
            <img src={tm3} alt="" className='rounded-3xl' />
            { thirdContent && (
<>
                <div className='flex justify-between px-10 py-3 bg-iconBlue rounded-b-3xl absolute w-full bottom-0 animate-appear-text-delay-1'>
                  <FaYoutube size={30} color='white'/>
                  <FaTwitch size={30} color='white'/>
                  <FaTwitter size={30} color='white'/>
                  <FaInstagram size={30} color='white'/>
                </div>
                <div className='absolute bottom-20 w-full leading-normal text-white text-center text-[23px]'>
                  <h1 className='animate-appear-text-delay-1'>
                    TheGuill84
                  </h1>
                  <p className='uppercase font-normal font-jost text-[19px] animate-appear-text-delay-2'><span className='font-bold'>415k</span> sur youtube</p>
                </div>
              </>
            )}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Team