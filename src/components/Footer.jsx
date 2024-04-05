import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faSquareYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import app_logo from '../images/app_logo.jpg'
import google from '../images/google_logo.png'


function Footer() {
  return (
    <div className="lg:px-20 lg:py-20 xs:p-5 xs:px-5 md:p-7">
        <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col justify-around lg:gap-20 xs:gap-3">
          <div className="flex flex-col lg:w-1/4 md:w-1/4">
            <h1 className='font-bold w-10 mb-2 text-xl'>Easy <span className='text-blue-600'>ahead</span></h1>
            <p className='font-light text-sm lg:mb-12 xs:mb-2'>We take the work out of connecting with others so you can accomplish more.</p>
            <select name="lang" className='text-sm border-2 border-gray-200 p-1 rounded-4 mb-8' id="lang">
              <option value="english">English</option>
              <option value="telugu">Telugu</option>
              <option value="hindi">Hindi</option>
            </select>
            <div className="flex flex-row mb-8 cursor-pointer">
              <img src={app_logo} alt="app store" className='w-36 rounded-2 object-cover h-8'/>
              <img src={google} alt="google play" className='w-32 rounded-2 object-cover h-8'/>
            </div>
            <div className="flex flex-row gap-5 cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} size="x" />
            <FontAwesomeIcon icon={faFacebookF} size="x"  />
            <FontAwesomeIcon icon={faInstagram} size="x"  />
            <FontAwesomeIcon icon={faLinkedinIn} size="x"  />
            <FontAwesomeIcon icon={faSquareYoutube} size="x"  />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className='font-bold text-md lg:mb-3 xs:mb-1'>About </h1>
            <div className="text-sm text-gray-500 font-light flex flex-col lg:gap-4 xs:gap-1">
              <a href="#">About Calendly</a>
              <a href="#">Contact Sales</a>
              <a href="#">Newsroom</a>
              <a href="#">Careers</a>
              <a href="#">Security</a>

            </div>

            <h1 className='font-bold lg:mt-7 xs:mt-2 text-md lg:mb-3 xs:mb-1'>Support </h1>
            <div className="text-sm text-gray-500 font-light flex flex-col lg:gap-4 xs:gap-1">
              <a href="#">Help Center</a>
              <a href="#">Video Tutorials</a>
              <a href="#">Cookie Settings</a>
            </div>

          </div>

          <div className="flex flex-col">
            <h1 className='font-bold text-md lg:mb-3 xs:mb-1'>Solutions </h1>
            <div className="text-sm text-gray-500 font-light flex flex-col lg:gap-4 xs:gap-1">
              <a href="#">Customer Success</a>
              <a href="#">Sales</a>
              <a href="#">Recruiting</a>
              <a href="#">Information Technology</a>
              <a href="#">Marketing</a>

            </div>

            <h1 className='font-bold lg:mt-7 xs:mt-2 text-md lg:mb-3 xs:mb-1'>Add-Ons </h1>
            <div className="text-sm text-gray-500 font-light flex flex-col lg:gap-4 xs:gap-1">
              <a href="#">Download for Chrome</a>
              <a href="#">Download for Firefox</a>
            </div>

          </div>

          <div className="flex flex-col">
            <h1 className='font-bold text-md lg:mb-3 xs:mb-1'>Popular Features </h1>
            <div className="text-sm text-gray-500 font-light flex flex-col lg:gap-4 xs:gap-1">
              <a href="#">Embed Calendly</a>
              <a href="#">Availability</a>
              <a href="#">Sending Notifications</a>
              <a href="#">Using Calendly Mobile</a>
            </div>

            <h1 className='font-bold lg:mt-7 xs:mt-2 text-md lg:mb-3 xs:mb-1'>Developers </h1>
            <div className="text-sm text-gray-500 font-light flex flex-col lg:gap-4 xs:gap-1">
              <a href="#">Developer Tools</a>
            </div>

          </div>
        </div>
        <div className="flex justify-between lg:text-xs xs:text-[9px] font-light md:ml-6 text-gray-500 mt-3">
          <p>Copyright Calendly 2022</p>
          <a href="">Privacy / Terms and Conditions</a>
        </div>
    </div>
  )
}

export default Footer
