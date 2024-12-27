import { integrations } from '../constants';
import Gallery from './ui/gallery';
import Tag from './ui/tag';
import React from 'react';

const Integration = () => {
    return (
        <section className='overflow-hidden py-24 flex items-center justify-center'>
            <div className="container">
                <div className='grid lg:grid-cols-2 items-center lg:gap-16 '>
                    <div>
                        <Tag>Integrations</Tag>
                        <h3 className='text-2xl font-medium mt-6'>Maximum efficiency? <span className='text-secondry'>Integrate</span> with other applications.</h3>
                        <p className='text-white/50 mt-4 '>Integrate with other applications to maximize efficiency and streamline your workflow.</p>
                    </div>
                    
                    {/*  the slice gets the portion of the array and then it's reversed */}
                    <div className='h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8 grid md:grid-cols-2 gap-4 '>
                        <Gallery integrations={integrations} />
                        <Gallery integrations={integrations.slice().reverse()} className='hidden md:flex' reverse />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Integration;
