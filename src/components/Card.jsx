import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Card({ heading, text, link, content, icon, isIcon }) { 
  return (
    <div className="lg:h-60 xs:h-full">
      <div className="lg:max-w-xs xs:w-full flex flex-col justify-between h-full">
        <div>
          {isIcon ? (
            <FontAwesomeIcon icon={icon} className="text-blue-500 lg:px-4 xl:px-4 md:px-4 xs:px-2  pt-4 text-3xl mb-3" />
          ) : (
            <img src={content} alt={heading} className="mb-3 h-32 w-full object-cover" />
          )}
          <h3 className="text-md text-blue-950 lg:px-4 xl:px-4 md:px-4 xs:px-2 xs:text-sm font-semibold lg:mb-5 md:mb-5 xs:mb-2">{heading}</h3>
          <p className="text-gray-500 font-light xs:text-xs xs:mb-2 lg:px-4 xl:px-4 md:px-4 xs:px-2 text-sm leading-relaxed">{text}</p>
        </div>
        <a href={link} className="text-blue-500 mt-auto lg:px-4 xl:px-4 md:px-4 xs:px-2 xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs font-semibold">
          Learn More
          <FontAwesomeIcon icon={faAngleRight} className="ml-2 text-xs"/>
        </a>
      </div>
    </div>
  );
}

export default Card;

