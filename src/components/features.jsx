import React, { useState } from 'react';
import { features } from '../constants';
import { temp1, temp2, temp3 } from '../utils';
import Tag from './ui/tag';
import Card from './ui/card';
import Display from './ui/display';
import Collections from './ui/collections';
import Pointer from './ui/pointer';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeAnimation from './ui/type_animation';

const Features = () => {
    // images array
    const displayImg = [temp1, temp2, temp3];
    // this could be refactores better to a cstom component.
    const [isHovered, setIsHovered] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isTemplated, setIsTemplated] = useState(false);

    return (
        <section className="py-24 flex flex-col items-center justify-center">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-4xl font-medium text-center mt-6 mx-auto mb-16">
                    Streamline your workflow <span className="text-secondry">efficiently</span>
                </h2>

                {/* Features card section */}
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}

                    <div className='relative'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}                    >
                        <Card
                            title="Collaboration"
                            className="col-span-1 lg:col-span-1 group"
                            description="Collaborate seamlessly with other designers without conflicts"
                        >
                            <Collections />
                            {/* random cursor movement */}
                            <div>
                                {isHovered && (
                                    <>
                                        <motion.div
                                            initial={{ x: 0, y: 0 }}
                                            animate={{
                                                x: [-240, -60],
                                                y: [24, 48, 24, 0],
                                                transition: { duration: 0.9, ease: "easeInOut" },
                                            }}
                                            className="absolute top-40 left-48"
                                        >
                                            <Pointer name="angela" color="alternate" />
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: 0, y: 0 }}
                                            animate={{
                                                x: [0, 0, 100, 0],
                                                y: [0, -200, -24, 48, 60],
                                                rotate: [0, 15, -15, 0],
                                                transition: { duration: 2, ease: "easeInOut", delay: 0.3 },
                                            }}
                                            className="absolute top-40 left-48"
                                        >
                                            <Pointer name="mia" color="primary" />
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: 0, y: 0 }}
                                            animate={{
                                                x: [50, -30, 50],
                                                y: [0, -200, 50],
                                                scale: [1, 1.2, 1],
                                                transition: { duration: 1.2, ease: "easeInOut", delay: 0.6 },
                                            }}
                                            className="absolute top-40 left-48"
                                        >
                                            <Pointer name="anita" color="secondary" />
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: 0, y: 0 }}
                                            animate={{
                                                x: [200, -40, 200],
                                                y: [0, -200, 50],
                                                rotate: [0, 20, -20, 0],
                                                transition: { duration: 1.5, ease: "easeInOut", delay: 0.9 },
                                            }}
                                            className="absolute top-40 left-48"
                                        >
                                            <Pointer name="serena" color="#d8b4fe" />
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </Card>
                    </div>


                    {/* Card 2 */}
                    <div
                        onMouseEnter={() => setIsCardHovered(true)}
                        onMouseLeave={() => setIsCardHovered(false)}
                    >
                        {/* typing animation */}
                        <Card
                            title="Prototyping"
                            className="col-span-1 lg:col-span-1"
                            description="Seamlessly transition through prototypes while captivating your audience"
                        >
                            <div className="aspect-video flex items-center justify-center relative">
                                <div
                                    className="text-2xl font-extrabold text-white/20 text-center">

                                    Celebrating{" "}
                                    <span>
                                        {isCardHovered ? (
                                            <TypeAnimation />

                                        ) :
                                            (
                                                <span className='bg-gradient-to-r from-secondry to-alternate bg-clip-text text-transparent'>
                                                    Exceptional
                                                </span>
                                            )
                                        }
                                    </span>
                                    {" "}
                                    Growth This Year
                                </div>
                            </div>
                        </Card>

                    </div>
                    {/* Card 3 */}
                    <div
                        onMouseEnter={() => setIsTemplated(true)}
                        onMouseLeave={() => setIsTemplated(false)}
                    >
                        {/* staggared animation */}

                        <Card
                            title="Templates"
                            className="col-span-1 lg:col-span-1"
                            description="Quality templates developed to guide and inspire your next project"
                        >
                            <div className="aspect-video flex items-center justify-center gap-1">

                                {Array.from({ length: 3 }).map((_, i) => (

                                    <div key={i}
                                    >
                                        {isTemplated ? (
                                            <motion.div
                                                initial={{ x: 0, y: 0 }}
                                                animate={{ x: 0, y: [-40, 0] }}
                                                transition={{
                                                    delay: i * 0.1,
                                                    duration: 0.5,
                                                    ease: [.22, .03, .26, 1],
                                                }}
                                            >
                                                <Display className="bg-cover">
                                                    <img
                                                        src={`${displayImg[i]}`}
                                                        alt="alt-1"
                                                        className="object-cover h-full w-full border border-secondry/20 rounded-lg"
                                                    />
                                                </Display>
                                            </motion.div>
                                        ) : (
                                            <div
                                                key={i}
                                            >
                                                <Display className="bg-cover">
                                                    <img
                                                        src={`${displayImg[i]}`}
                                                        alt="alt-1"
                                                        className="object-cover h-full w-full border border-secondry/20 rounded-lg"
                                                    />
                                                </Display>
                                            </div>
                                        )
                                        }
                                    </div>

                                ))}
                            </div>
                        </Card>
                    </div>

                </div>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-neutral-900 border-white/10 inline-flex px-3 py-1.5 rounded-full gap-4 items-center md:px-5 md:py-2"
                        >
                            <span className="bg-secondry text-neutral-950 size-5 rounded-full inline-flex items-center justify-center">
                                <Sparkles className="w-4 h-4" />
                            </span>
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Features;
