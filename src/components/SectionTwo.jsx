import React from 'react';
import { sectionTwoCards } from '../data/CardData';
import Card from './Card';
import secondSection from '../images/secondSectionImage.jpg'

function SectionTwo() {

    return (
        <div className='xl:px-40 lg:px-20 sm:px-8 xs:px-5'>
            <div className='flex xl:flex-row items-center lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
                {/* Left side: 4 cards */}
                <div className='col-span-1'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 lg:gap-4'>
                        {sectionTwoCards.map((card, index) => (
                            <div key={index}>
                                <Card heading={card.heading} text={card.text} link={card.link} icon={card.icon} isIcon={true} />
                            </div>
                        ))}
                    </div>
                </div>
           
                {/* Right side: Image */}
                <div className='xl:w-2/4 lg:w-2/4 h-full xs:mt-5 object-cover'>
                    <img src={secondSection} alt="Your Image" />
                </div>
            </div>
            
        </div>
    );
}

export default SectionTwo;
