import React from 'react';
import logo_1 from '../images/logo_1.png';
import logo_2 from '../images/logo_2.svg';
import logo_3 from '../images/logo_3.png';
import logo_4 from '../images/logo_4.jpg';
import logo_5 from '../images/logo_5.png';

function Clients() {
  // Array to hold logo images
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5];
  // Array to repeat each logo 5 times
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className='lg:my-10 xs:my-5 xs:px-4'>
      <h1 className='font-bold text-center xl:text-3xl lg:text-2xl xs:text-lg lg:w-2/4 md:w-2/4 sm:w-3/4 m-auto'>
        Simplified scheduling for more than <span className='text-blue-600'>10,000,000</span> users worldwide
      </h1>
      <div className="flex clients-container lg:my-10 xs:my-0">
        <div className="clients">
          {repeatedLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
