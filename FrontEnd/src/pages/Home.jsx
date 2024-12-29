import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header/>
      <div className='w-full bg-black md:w-[100%]'>
        <Card className='py-5'/>
      </div>
    </>
  )
}
export default Home
