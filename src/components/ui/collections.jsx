import React from 'react';
import Avatar from './avatar';
import { img1, img2, img3, hov1 } from '../../utils';
import Pointer from './pointer';
import { motion } from 'framer-motion';

const Collections = () => {
    return (
        <div className='aspect-video flex items-center justify-center'>
            <Avatar className='z-30'>
                <img src={img1} alt='Profile picture 1' className='rounded-full' />
            </Avatar>
            <Avatar className='-ml-6 border-alternate z-20'>
                <img src={img2} alt='Profile picture 2' className='rounded-full' />
            </Avatar>
            <Avatar className='-ml-6 border-secondry z-10'>
                <img src={img3} alt='Profile picture 3' className='rounded-full' />
            </Avatar>
            <Avatar className='-ml-6 border-transparent group-hover:border-purple-300 transition'>
                <div className='size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative'>
                    <img
                        src={hov1}
                        alt='Hover effect'
                        className='absolute size-full rounded-full opacity-0 group-hover:opacity-100'
                    />
                    {Array.from({ length: 3 }).map((_, i) => (
                        <span
                            className='size-1.5 rounded-full bg-white inline-flex'
                            key={i}
                        ></span>
                    ))}
                </div>
            </Avatar>
        </div>
    );
};

export default Collections;
