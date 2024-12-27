import React from 'react';
import { twMerge } from 'tailwind-merge';

const Display = ({ className, children, ...otherProps }) => {
    return (
        <div
            className={twMerge(
                "size-32 overflow-hidden border-1 border-white/15 p-1 bg-neutral-900",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}

export default Display;
