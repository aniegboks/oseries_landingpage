import React from 'react';
import { MousePointer } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Pointer = ({ name, color }) => {
    return (
        <div className='relative'>
            <MousePointer className='w-5 h-5 text-white' />
            <div className='absolute top-full left-full'>
                <div className={twMerge('inline-flex rounded-full font-bold text-sm bg-secondry px-2 rounded-tl-none', color === 'alternate' && 'bg-alternate')}>
                    {name}
                </div>

            </div>
        </div>
    )
}

export default Pointer;