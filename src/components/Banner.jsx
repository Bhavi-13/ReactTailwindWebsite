import React from 'react'
import meeting from '../images/meeting.png'

function Banner() {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xl:px-24 xl:mt-16">
      <div className='flex xl:w-2/5 lg:w-1/4 lg:mx-20 md:mx-10 sm:mx-5 xs:mx-5 lg:mt-10 xs:mt-4 flex-col'>
        <p className='text-blue-600 xl:text-lg lg:text-lg md:text-md xs:text-xs lg:mb-5 xs:mb-2'>CALENDLY FEATURES</p>
        <h1 className='lg:text-4xl md:text-2xl font-bold text-gray-700 lg:mb-5 xs:mb-2'>Take the hassle out of <span className='text-blue-600'>scheduling</span></h1>
        <p className='text-gray-500 lg:text-lg md:text-lg xs:text-xs font-light lg:mb-6 xs:mb-3'>Calendly helps you look better meetings faster by syncing and integrating everything in one intuitive platform</p>
        <button className='bg-blue-600 text-white rounded-full lg:p-5 xs:p-2 w-40 text-xs'>Start for free</button>
      </div>

      <div className='xl:w-4/5 xs:mt-5'>
        <img src={meeting} alt="no image"/>
      </div>
    </div>
  )
}

export default Banner
