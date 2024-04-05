import React from 'react'

function Enquiry() {
  return (
    <div className='lg:px-20 xl:px-3 sm:px-8 xs:px-2'>
        <h3 className='lg:text-2xl xl:text-3xl md:text-2xl font-bold text-center lg:w-4/5 m-auto pt-16 mb-5'>We take the manual work out of scheduling</h3>
        <p className='text-gray-600 font-light m-auto text-center lg:w-2/4 xs:text-xs md:text-lg lg:text-sm lg:mb-10'>Get instant access to all of these features and more, so you can have more productive meetings without the back-and-forth</p>
        <div className='flex justify-center items-center xs:mt-3 gap-10'>
            <button className='text-white bg-blue-600 text-xs lg:p-4 xs:p-2 rounded-full lg:px-8'>Start for free</button>
            <button className='border-black border-2 lg:p-4 rounded-full xs:p-2 text-xs lg:px-8'>Contact Sales</button>
        </div>
    </div>
  )
}

export default Enquiry
