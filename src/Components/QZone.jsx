import React from 'react';
import swimming from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGroundImg from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playGroundImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;