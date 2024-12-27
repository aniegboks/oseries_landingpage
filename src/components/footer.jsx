import React from 'react';
import { logo } from '../utils';
import { footers } from '../constants';

const Footer = () => {
    return (
        <section className='flex flex-col items-center justify-center py-20'>
            <div className='container'>
                <div className='flex flex-col md:flex-row items-center justify-between md gap-6'>

                    {/* footer image*/}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="oseries" className="h-8 w-auto ml-2" />
                        <span className="font-bold text-2xl">Oseries</span>
                    </div>
                    <div>
                        
                        {/* footerlinks */}
                        <nav className='flex gap-6'>
                            {
                                footers.map((footer, i) => (
                                    <a key={i} href={footer.href} className='text-white/50 text-sm'>{footer.label}</a>
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
