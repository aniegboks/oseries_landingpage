import React from 'react';
import PricingCard from './ui/pricing_card';
import Tag from './ui/tag';
import { pricings } from '../constants';

const Pricing = () => {
    return (
        <section className="flex flex-col items-center justify-center py-24">
            <div className="container">
                <div className='flex flex-col justify-center'>
                    <Tag className='max-w-xl mx-auto'>Pricing</Tag>
                    <h2 className='text-2xl font-medium mt-6 text-center'>Tailored plans <span className='text-secondry ml-2'>designed</span> to fit every need.</h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 mt-12">
                    {pricings.map((pricing, i) => (
                        <PricingCard
                            key={i}
                            title={pricing.title}
                            className="col-span-1 lg:col-span-1"
                            description={pricing.description}
                            price={pricing.price}
                            pricing={pricing}
                        >
                            <div className="aspect-video flex items-center justify-center">
                                <p className="text-3xl font-extrabold text-white/20 text-center">
                                    Celebrating{' '}
                                    <span className="bg-gradient-to-r from-secondary to-alternate bg-clip-text text-transparent">
                                        Exceptional
                                    </span>{' '}
                                    Growth This Year
                                </p>
                            </div>
                        </PricingCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
