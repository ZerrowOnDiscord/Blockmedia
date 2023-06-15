import React, {useEffect, useState} from 'react'
import NavBar from '../components/Home/NavBar'
import Header from '../components/Home/Header'
import Service from '../components/Home/Services'
import CTA from '../components/Home/CTA'
import Team from '../components/Home/Team'
import Scroll from '../components/Home/Scroll'
import Footer from '../components/Home/Footer'


const HomePage = () => {

  return (
    <main>
        <NavBar/>
        <Header/>
        <Service/>
        <CTA/>
        <Team/>
        <Scroll/>
        <Footer/>
    </main>
  )
}

export default HomePage