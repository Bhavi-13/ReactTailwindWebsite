import React from 'react';
import { sectionThreeCards } from '../data/CardData';
import Card from './Card';

function SectionThree() {

    return (
        <div className='xl:px-40 lg:px-20 sm:px-8 xs:px-5'>
            <h3 className='xl:text-3xl lg:text-2xl xs:text-xl font-bold text-center xs:px-5 lg:w-2/4 m-auto pt-16 lg:mb-5 xs:mb-3'>Stay in sync from any app, on any device</h3>
            <p className='text-gray-600 font-light m-auto text-center lg:w-3/4 lg:mb-10 xs:px-5 xl:text-lg lg:text-sm md:text-lg xs:text-xs'>Reclaim your time and your tabs with native integrations with over 70 different apps, and mobile and browser apps for easier access.</p>
            <div className='flex xl:flex-row items-center xl:gap-20 lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
                 {/* Right side: Image */}
                 <div  className='xl:w-2/6 md:w-2/4 md:mx-auto'>
                    <img src="https://salesnash.com/wp-content/uploads/2022/04/2-1-936x1024.webp" alt="Your Image" />
                </div>

                {/* Left side: 4 cards */}
                <div className='col-span-1'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 lg:gap-8'>
                        {sectionThreeCards.map((card, index) => (
                            <div key={index}>
                                <Card heading={card.heading} text={card.text} link={card.link} icon={card.icon} isIcon={true}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
