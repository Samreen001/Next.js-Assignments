import React from 'react'
import Navbar from './Components/Navbar'
import Link from 'next/link'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Hero/>
      <Footer/>

    </div>
  )
}

export default Home

