import React from 'react';
import { cva } from 'class-variance-authority';

const Button = (props) => {
    const { variant, className, children, size } = props;

    const classes = cva('border h-12 rounded-full px-6', {
        variants: {
            variant: {
                primary: 'bg-primary text-neutral-950 border-primary',
                secondary: 'border-white bg-transparent',
            },
            size: {
                sm: 'h-10',
            }
        },
        defaultVariants: {
            variant: 'primary',
        },
    });

    return (
        <button className={classes({ variant, className, size })}>
            {children}
        </button>
    );
};

export default Button;
