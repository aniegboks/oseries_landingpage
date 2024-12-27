import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Sparkles } from 'lucide-react';

const Tag = ({ className, children, ...otherProps }) => {
    return (
        <div className={twMerge("inline-flex border border-secondry gap-4 text-secondry px-3 py-1 rounded-full items-center", className)} {...otherProps}>
            <span><Sparkles className='w-4 h-4'/></span>
            <span className='text-sm'>{children}</span>
        </div>
    )
}

export default Tag;