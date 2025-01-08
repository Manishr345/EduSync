import React from 'react'
import Card from '../components/Home/Card'
import Header from '../components/Home/Header'
import Carousel from '../components/Home/Carousel'
import Notice from '../components/Home/Notice'

const Home = () => {
  // if(localStorage.getItem('admin')=== "true"){
  //   localStorage.setItem('admin', "true");
  // }
  // else{
  //   localStorage.setItem('admin', "false");
  // }
  // console.log(localStorage.getItem('admin'))

  // if (localStorage.getItem('studentPresence') === "true") {
  //   localStorage.setItem('studentPresence', "true");
  // } else {
  //   localStorage.setItem('studentPresence', "false");
  // }


  // React.useEffect(() => {
  //   if (localStorage.getItem('admin') === "true") {
  //     localStorage.setItem('admin', "true");
  //   } else {
  //     localStorage.setItem('admin', "false");
  //   }
  //   if (localStorage.getItem('studentPresence') === "true") {
  //     localStorage.setItem('studentPresence', "true");
  //   } else {
  //     localStorage.setItem('studentPresence', "false");
  //   }
  // }, []);
  return (
    <>
     <Header></Header>
      <Carousel/>
      <Notice/>
      <div className='w-full bg-black md:w-[100%]'>
        <Card className='py-5' />
      </div>
    </>
  )
}
export default Home
