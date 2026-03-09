import React from 'react'
import { BsFire } from 'react-icons/bs'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className='mt-6 sm:mt-10 max-padd-container max-xl:mt-8 mb-16 sm:mb-20'>
      
      <div className='relative max-pad-container 
        h-[50vh] sm:h-[60vh] lg:h-[75vh]
        w-full rounded-2xl sm:rounded-3xl mt-4 sm:mt-6 overflow-hidden 
        border border-secondary/30 shadow-2xl'>

        {/* Background Image */}
        <div className='absolute inset-0 bg-hero bg-cover bg-center scale-105'></div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r 
          from-black/50 via-black/30 to-transparent'></div>

        {/* Content */}
        <div className='relative z-10 h-full flex items-center'>
          <div className='w-full max-w-[780px] 
            px-4 sm:px-8 md:px-10 
            text-center sm:text-left'>
            
            <h5 className='flex items-center justify-center sm:justify-start 
              gap-x-2 uppercase tracking-widest 
              text-white text-[10px] xs:text-xs sm:text-sm md:text-base 
              font-semibold mb-2 sm:mb-3'>
              Donate Blood, Save Lives 
              <BsFire className='animate-pulse'/>
            </h5>

            <h1 className='text-black font-bold leading-snug 
              text-xl xs:text-2xl sm:text-4xl lg:text-5xl 
              max-w-full sm:max-w-[620px] mx-auto sm:mx-0'>
              Your One Drop Can Be Someone’s Lifeline
            </h1>

            <p className='text-white max-w-full sm:max-w-lg 
              mt-3 sm:mt-5 mb-4 sm:mb-6 
              border-l-0 sm:border-l-4 
              border-red-500 sm:pl-4 
              text-[10px] xs:text-xs sm:text-base 
              leading-snug sm:leading-relaxed'>
              Join our mission to connect blood donors with patients in need — 
              fast, safe, and reliable.
            </p>

            <div className='flex flex-col xs:flex-row justify-center sm:justify-start gap-2 xs:gap-3 sm:gap-6'>
              
               <a 
                href="https://forms.gle/6bssSNG1mckUyZbUA"
                target="_blank"
                rel="noopener noreferrer"
                className='px-4 py-2 xs:px-5 xs:py-3 rounded-lg bg-red-500 
                text-white font-semibold shadow-lg 
                hover:scale-105 transition-transform duration-300 
                text-xs xs:text-sm sm:text-base text-center'>
                Become a Donor
              </a>

              {/* <Link className='px-4 py-2 xs:px-5 xs:py-3 rounded-lg bg-white/10 
                backdrop-blur-md text-white border border-white/20 
                hover:bg-white/20 transition text-xs xs:text-sm sm:text-base text-center'>
                Find Blood
              </Link> */}

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
