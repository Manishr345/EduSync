import React, { useEffect, useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585763465881-62c5d70627bc?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full mt-5 mb-5 pl-5 pr-5 grid grid-cols-1 gap-7 sm:grid-cols-2">
      {/* Notice part */}
      <div className=' bg-black text-white w-full pl-5 pr-5 flex justify-center items-center flex-wrap gap-10 text-center sm:gap-2 md:p-[40px] md:gap-[10vh]' >
        <h1 className='text-6xl lg:text-8xl xl:text-[50px]'>HOGWARTS INSTITUTE</h1>
        <h2 className='text-xl lg:text-2xl xl:text-3xl'>
          SYNC LATEST SKILLS WITH US, REGRETS ARISE FOR NOT APPLYING ON US, GIVE A TRY!
          NEW WAY OF LEARNING BEGINS.
          <br /><br />
          NO ROOM FOR RACISM
          SERVE AT YOUR BEST YOU WILL BE HIGHLIGHTED
          GRIND THE PATH IN WHICH YOU ARE INTERESTED
          REST LEAVE TO US
        </h2>
      </div>

      {/* Carousel part */}
      <div className="relative overflow-hidden sm:h-auto md:h-auto xl:h-auto rounded-3xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`brightness-50 absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={image} className="w-full h-[80vh] object-cover rounded-3xl" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {/* <div className="2xl:left-[74%] xl:left-[71%] lg:left-[70%] md:left-[67%] sm:left-[66%] absolute z-30 flex justify-center items-center left-[35%] bottom-[12%] space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-1 rounded-full ${index === currentSlide ? "bg-[#0d3645]" : "bg-white"}`}
            aria-current={index === currentSlide ? "true" : "false"}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div> */}

      {/* Buttons */}
      {/* <div className='flex justify-between translate-y-[-700%] sm:translate-x-[108%] sm:translate-y-[-900%] md:translate-y-[-1200%] lg:translate-x-[106%] xl:translate-x-[104%] xl:translate-y-[-1500%]'>
        <button
          type="button"
          className="start-5 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white">
            <svg className="w-2 h-2 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="end-5 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white">
            <svg className="w-2 h-2 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}
    </div>
  );
}
