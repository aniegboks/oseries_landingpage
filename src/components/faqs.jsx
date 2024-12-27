import Tag from './ui/tag';
import { faqs } from '../constants';
import { Plus } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";


const Faqs = () => {
    // manges the state based on the index by default it's se to 0 there for the first answer is open 
    const [displayIndex, setDisplayedIndex] = useState(0);
    return (
        <section className='py-24 flex flex-col items-center justify-center'>
            <div className='container'>
                <div className='flex flex-col justify-center'>
                    <Tag className='max-w-xl mx-auto'>Faqs</Tag>
                    <h2 className='text-2xl font-medium mt-6 text-center'>Frequently asked <span className='text-secondry ml-2'>questions</span></h2>
                </div>
                <div className='mt-12 flex flex-col gap-6 max-w-xl mx-auto'>
                    {faqs.map((faq, i) => (
                        <div key={i} className='bg-neutral-900 rounded-2xl border border-white/10 p-6 pb-8' onClick={() => setDisplayedIndex(i)}>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-medium'>{faq.question}</h4>
                                <Plus className={twMerge('text-primary w-4 h-4 flex-shrink-0', displayIndex === i && 'rotate-45 transition duration-300')} />
                            </div>
                            {/* handles animation */}
                            <AnimatePresence>
                                {displayIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0, }}
                                        animate={{ height: 0, marginTop: 24, }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className={twMerge('mt-6', displayIndex !== i && 'hidden')}>
                                        <p className='text-white/50'>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
