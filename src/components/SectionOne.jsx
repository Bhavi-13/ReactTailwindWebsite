import React from 'react';
import { sectionOneCards } from '../data/CardData';
import Card from './Card';

function SectionOne() {

  return (
    <div className='relative overflow-hidden'>
      <div className="bg-blue-950 lg:h-96 absolute inset-0"></div>
      <div className="text-white text-center lg:w-2/5 xs:w-full m-auto mb-5 mt-10 relative z-10">
        <h3 className='xl:text-3xl lg:text-2xl xs:text-xl font-bold mb-8 xs:mb-3'>Spend more time connecting, not scheduling</h3> {/* Heading text */}
        <p className='font-light mb-8 xs:mb-2 xl:text-lg lg:text-md xs:text-xs'>Book more meetings and hit goals faster by streamlining your scheduling process and automating manual busywork</p> {/* Paragraph text */}
      </div>

      <div className='flex justify-center flex-wrap relative z-10'>
        {sectionOneCards.map((card, index) => (
          <div key={index} className="xl:max-w-80 lg:max-w-60 sm:max-w-xs md:max-w-52 xs:max-w-48 lg:h-72 md:h-60 bg-white shadow-lg rounded-lg m-4 overflow-hidden relative z-10">
            <Card heading={card.heading} text={card.text} link={card.link} icon={card.icon} isIcon={true}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionOne;
