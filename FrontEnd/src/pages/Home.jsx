import React from 'react'
import Card from '../components/Home/Card'
import Header from '../components/Home/Header'
import Carousel from '../components/Home/Carousel'

const Home = () => {
  if(localStorage.getItem('admin')=== "true"){
    localStorage.setItem('admin', "true");
  }
  else{
    localStorage.setItem('admin', "false");
  }
  console.log(localStorage.getItem('admin'))


  React.useEffect(() => {
    if (localStorage.getItem('admin') === "true") {
      localStorage.setItem('admin', "true");
    } else {
      localStorage.setItem('admin', "false");
    }
  }, []);
  return (
    <>
     <Header></Header>
      <Carousel/>
      <div className='w-full bg-black md:w-[100%]'>
        <Card className='py-5' />

      </div>
    </>
  )
}
export default Home
