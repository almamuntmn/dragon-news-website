import React from 'react';
import MarqueeModule from 'react-fast-marquee';
const Marquee = MarqueeModule.default || MarqueeModule;

console.log('Marquee', Marquee);

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center p-4 bg-base-300 my-6'>
            <p className='bg-secondary px-3 py-2 text-base-100'>Latest</p>
            <Marquee className='text-semibold flex gap-5' speed={50} pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews; 