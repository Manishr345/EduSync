import React from 'react'
import Card from '../components/Home/Card'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className='w-full bg-black md:w-[100%]'>
        <Card className='py-5' />

      </div>

      <Footer />




    </>
  )
}
export default Home
