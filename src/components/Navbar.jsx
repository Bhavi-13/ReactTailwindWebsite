import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 relative">
      <div className="lg:max-w-5xl xl:max-w-7xl md:w-full xl:mt-5 lg:mx-auto xs:px-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg" alt="Logo" className="h-8 mr-2" />
          <img src="https://assets.calendly.com/assets/frontend/media/calendly-wordmark-0da6c58d9a06b08c975f.svg" alt="app name" className='mt-1' />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:hidden lg:block lg:space-x-7 xl:space-x-10 font-medium">
          <a href="#">Individuals</a>
          <a href="#">Teams</a>
          <a href="#">Enterprise</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='lg:hidden'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Login Buttons */}
        <div className="md:hidden lg:block items-center hidden space-x-4">
          <a href="#" className='font-medium'>Log In</a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Get Started</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 bg-white w-full border-t border-gray-200 p-4">
          <a href="#" className="block p-1">Individuals</a>
          <a href="#" className="block p-1">Teams</a>
          <a href="#" className="block p-1">Enterprise</a>
          <a href="#" className="block p-1">Product</a>
          <a href="#" className="block p-1">Pricing</a>
          <a href="#" className="block p-1">Resources</a>
          <a href="#" className="block p-1">Log In</a>
          <a href="#" className="block p-1 bg-blue-500 text-white py-2 px-4 w-32 rounded-full">Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
