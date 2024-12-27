import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const Gallery = ({ integrations = [], className, reverse = false }) => {
    return (
        <motion.div
            initial={{ y: reverse ? '-50%' : 0 }}
            animate={{ y: reverse ? 0 : '-50%' }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className={twMerge('flex flex-col gap-4 pb-4', className)}
        >
            {Array.from({ length: 2 }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-col gap-4">
                    {integrations.map((integration, index) => (
                        <div
                            key={`${integration.name}-${index}`}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex justify-center">
                                <img
                                    src={integration.icon}
                                    alt={integration.name}
                                    className="h-24 w-24"
                                />
                            </div>
                            <h4 className="text-xl text-center mt-6">{integration.name}</h4>
                            <p className="text-center text-white/50 mt-2">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    );
};

export default Gallery;
