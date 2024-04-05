import React from 'react';
import { ExploreCards } from '../data/CardData';
import Card from './Card';

function Explore() {

  return (
    <div className='relative overflow-hidden xl:px-20'>
      <div className="bg-blue-950 absolute inset-0"></div>
      <div className="text-white text-center lg:w-2/5 xs:w-screen m-auto relative mt-10 z-10">
        <p className='lg:text-lg md:text-lg text-blue-400 mb-5'>Explore</p>
        <p className='font-bold text-white lg:text-2xl xs:text-md mb-5'>Discover more ways to work with Calendly</p>
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-4 xs:grid-cols-2 md:grid-cols-3 relative mb-10 z-10'>
        {ExploreCards.map((card, index) => (
          <div key={index} className="xl:w-72 lg:w-56 sm:w-72 md:w-56 xs:w-32 lg:h-full bg-white shadow-lg rounded-lg m-4 overflow-hidden relative z-10">
            <Card heading={card.heading} text={card.text} link={card.link} content={card.image} isIcon={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
