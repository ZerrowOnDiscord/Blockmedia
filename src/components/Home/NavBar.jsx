import React, { useEffect } from 'react'
import { Logo } from '../../assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseSharp } from 'react-icons/io5'

const NavBar = () => {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  useEffect(() => {
    if(open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [open])
  
  return (
    <div className={sticky ? 'flex items-center justify-between px-20 py-5 sticky top-0 animate-appear-anim shadow-lg z-[100] bg-white' : 'flex items-center justify-between md:px-20 px-10 mx-auto md:py-10 py-2'}>
        <RxHamburgerMenu className='md:hidden cursor-pointer' size={25} onClick={() => open ? setOpen(false) : setOpen(true)}/>
        <img src={Logo} className='h-[30px]' alt="Logo" />
        <div className='md:hidden'></div>
        <ul className={'uppercase font-arimo text-[14px] font-semibold text-gray-800 tracking-wide hidden md:flex'}>
            <li><Link className='pr-10' to={"/"}>Influence & brand content</Link></li>
            <li><Link className='pr-10' to={"/"}>Evenement minecraft</Link></li>
            <li><Link className='pr-10' to={"/"}>Communaute discord</Link></li>
            <li><Link className='pr-10' to={"/"}>Nous contacter</Link></li>
        </ul>
        { open && (
          <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-50 md:hidden overflow-hidden'>
            <div className='flex flex-col h-full w-[75%] bg-white px-5 py-10 relative animate-appear-anim-mob'>
              <IoCloseSharp className='absolute right-5 cursor-pointer' size={20} onClick={() => open ? setOpen(false) : setOpen(true)}/>
              <img src={Logo} className='h-[30px] mt-10' alt="Logo" />
              <ul className='uppercase font-arimo text-[13px] font-bold text-black tracking-wide mt-10'>
                <li className='mb-5'><Link to={"/"}>Influence & brand <br/> content</Link></li>
                <li className='mb-5'><Link className='pr-10' to={"/"}>Evenement minecraft</Link></li>
                <li className='mb-5'><Link className='pr-10' to={"/"}>Communaute discord</Link></li>
                <li><Link className='pr-10' to={"/"}>Nous contacter</Link></li>
              </ul>
            </div>
          </div>
        )}
    </div>
  )
}

export default NavBar