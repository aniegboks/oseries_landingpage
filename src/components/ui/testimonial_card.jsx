import React from 'react';
import { twMerge } from 'tailwind-merge';



const TestimonialCard = ({ title, description, children, className, testimonial }) => {
    return (
        <div
            className={twMerge('bg-neutral-900 border border-white/10 p-6 rounded-3xl aspect-video', className)}>
            <div className=''>{children}</div>
            <div className='mt-16 ml-4'>
                <h3 className='text-2xl font-medium mt-6'>{testimonial.role}</h3>
                <p className='text-white/50 mt-2'>{testimonial.desc}</p>
            </div>
        </div>)
}

export default TestimonialCard;