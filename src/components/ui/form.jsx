import React from 'react';
import Button from './button';

const Form = () => {
    return (
        <form className='flex border border-white/15 rounded-full p-2 mt-8 mx-w-lg mx-auto'>
            <input type='email' placeholder='enter your email' className='bg-transparent px-4 flex-1 w-full' />
            <Button type='submit' variant='primary' className='whitespace-nowrap' size='sm'>sign up</Button>
        </form>
    )
}

export default Form;