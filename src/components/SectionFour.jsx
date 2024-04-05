import React from 'react';
import { sectionFourCards } from '../data/CardData';
import Card from './Card';
import sectionFour from '../images/sectionFourImage.webp'

function SectionFour() {

    return (
        <div className='xl:px-52 lg:px-20 sm:px-8 xs:px-5 mb-10'>
            <h3 className='xl:text-3xl lg:text-2xl xs:text-xl font-bold text-center m-auto pt-16 mb-5'>For teams of all sizes</h3>
            <p className='text-gray-600 font-light xl:w-3/4 m-auto text-center xl:text-lg xs:px-5 xs:text-xs lg:text-sm md:text-lg mb-10 xs:mb-2'>From small business to Fortune 100 enterprises-Calendly supports scheduling at scale with robust security and administrative controls</p>
            <div className='flex xl:flex-row xl:justify-between items-center lg:flex-row lg:gap-32 md:flex-col sm:flex-col xs:flex-col'>
                

                {/* Left side: 4 cards */}
                <div className='col-span-1'>
                    <div className='grid xl:grid-cols-1 lg:grid-cols-1 lg:gap-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2'>
                        {sectionFourCards.map((card, index) => (
                            <div key={index}>
                                <Card heading={card.heading} text={card.text} link={card.link} icon={card.icon} isIcon={true}/>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Right side: Image */}
                 <div className='xl:w-3/6 lg:w-3/6'>
                    <img src={sectionFour} alt="Your Image" />
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
