import { useState, useEffect, useRef, Fragment } from 'react';
import Tag from './ui/tag';
import TestimonialCard from './ui/testimonial_card';
import { testimonials } from '../constants';
import { motion, useAnimate } from 'framer-motion';


const Testimonials = () => {

    // useAnimate is used to animate
    const [scoop, animate] = useAnimate();
    // monitors interactivity of the animation
    const [isHovered, setIsHovered] = useState(false);
    const refAnimation = useRef(null);

    // handles the useAnimate animate only renders. to avoid unncessary rerender useref is used

    useEffect(() => {
        if (scoop.current) {
            // Initialize smooth infinite animation
            refAnimation.current = animate(
                scoop.current,
                { x: '-50%' },
                { duration: 15, ease: 'linear', repeat: Infinity }
            );
        }
        // cleans up the function aninmation 
        return () => {
            if (refAnimation.current) {
                refAnimation.current.cancel();
            }
        };
    }, [animate]);

    useEffect(() => {
        if (refAnimation.current) {
            if (isHovered) {
                // Pause animation on hover
                refAnimation.current.cancel();
            } else {
                // Resume animation
                refAnimation.current = animate(
                    scoop.current,
                    { x: '-100%' },
                    { duration: 15, ease: 'linear', repeat: Infinity }
                );
            }
        }
    }, [isHovered, animate,]);

    return (
        <section className="flex flex-col items-center justify-center py-24">
            <div className="container">
                <div className='relative'>
                    <div className="flex flex-col justify-center">
                        <Tag className="max-w-xl mx-auto">Testimonials</Tag>
                        <h2 className="text-2xl font-medium mt-6 text-center">
                            Tailored plans<span className="text-secondary ml-2">designed</span> to fit every need.
                        </h2>
                    </div>

                    <div className="overflow-x-clip mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div className=''>
                            <motion.div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                ref={scoop}
                                className="flex gap-4 pr-44 px-2 md:px-48"
                            >
                                {Array.from({ length: 2 }).map((_, i) => (
                                    <Fragment key={i}>
                                        {testimonials.map((testimonial, j) => (
                                            <TestimonialCard
                                                key={`${i}-${j}`}
                                                title="Collaboration"
                                                className="flex-shrink-0 w-[320px] md:w-[400px] p-6 md:p-8"
                                                description="Collaborate seamlessly with other designers without conflicts"
                                                testimonial={testimonial}
                                            >
                                                <div className="flex items-center gap-12">
                                                    <div className="relative">
                                                        <span className="flex items-center justify-center bg-white size-14 rounded-full absolute left-20 top-16">
                                                            <img
                                                                src={testimonial.icon}
                                                                alt="Testimonial Icon"
                                                                className="w-8 h-8"
                                                            />
                                                        </span>
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="size-24 ml-4 mt-4 rounded-full object-cover border-4 border-primary"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-medium">{testimonial.name}</h3>
                                                        <p>{testimonial.social}</p>
                                                    </div>
                                                </div>
                                            </TestimonialCard>
                                        ))}
                                    </Fragment>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
