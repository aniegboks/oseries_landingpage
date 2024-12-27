import { brands } from '../constants';
import { motion } from 'framer-motion';
import React from 'react';
const Brands = () => {
    return (
        <section className="flex items-center justify-center py-48 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 font-medium">
                    Preferred by industry leaders, trusted by market innovators
                </h3>
                <div className="flex overflow-hidden mt-12 
                [mask-image:linear-gradient(to right, transparent, black 30%, black 60%, transparent)]">
                    <motion.div
                        className="flex items-center justify-center gap-24 pr-28 flex-none"
                        animate={{ x: '-50%' }}
                        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <React.Fragment key={i}>
                                {brands.map((brand) => (
                                    <img
                                        key={brand.name}
                                        src={brand.image}
                                        alt={brand.name}
                                        className="h-24 w-24"
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
