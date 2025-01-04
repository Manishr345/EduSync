import React from 'react'
import Card from '../components/Home/Card'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import Carousel from '../components/Home/Carousel'

const Home = () => {
  return (
    <>
      <Carousel/>
      <div className='w-full bg-black md:w-[100%]'>
        <Card className='py-5' />

      </div>

      <Footer />




    </>
  )
}
export default Home
