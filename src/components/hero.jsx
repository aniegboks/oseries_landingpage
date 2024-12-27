// imports
import React, { useEffect, useState } from 'react';
import Form from './ui/form';
import Pointer from './ui/pointer';
import { hero1, hero2 } from '../utils';
import Cursor from './ui/cursor';
import { motion, useAnimate } from 'framer-motion';

const Hero = () => {
  //  the scoop and animate are destructured from the use animate hook in framer motion
  const [leftDesginScope, leftDesginAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesginScope, rightDesginAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  // the states monitor the custom cursor checking if its inside the section 
  // and postion tracks its location.
  const [isInside, setIsInside] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // the useEffect handles the useAnimate desgin (check motion.dev)
  useEffect(() => {
    leftDesginAnimate([
      [leftDesginScope.current, { opacity: 1 }, { duration: 0.9 }],
      [leftDesginScope.current, { x: 0, y: 0 }, { duration: 0.9 }],
    ]);
  }, [leftDesginAnimate, leftDesginScope]);

  useEffect(() => {
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.9 }],
      [leftPointerScope.current, { x: 0, y: -100 }, { duration: 0.9 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.9, ease: 'easeInOut' }],
    ]);
  }, [leftPointerAnimate, leftPointerScope]);

  useEffect(() => {
    rightDesginAnimate([
      [rightDesginScope.current, { opacity: 1 }, { duration: 0.9, delay: 2.8 }],
      [rightDesginScope.current, { x: 0, y: 0 }, { duration: 0.9 }],
    ]);
  }, [rightDesginAnimate, rightDesginScope]);

  useEffect(() => {
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.9, delay: 2.8 }],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.9 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.9 }],
    ]);
  }, [rightPointerAnimate, rightPointerScope]);

  // These are from the event listner they listen for mouseover and leave them
  const handleMouseEnter = () => setIsInside(true);
  const handleMouseLeave = () => setIsInside(false);
  // tracks ovement 
  const handleMouseMove = (e) => {
    if (isInside) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center py-24 overflow-x-clip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ cursor: 'none' }}
    >
      <div className="container">
        <div className='relative'>

          {/* Hero image and position. drag makes the image draggable images are not draggable  */}
          <motion.div
            ref={leftDesginScope}
            initial={{ opacity: 0, x: -100, y: 100 }}
            drag
            className="absolute -left-48 top-16 hidden lg:block"
          >
            <motion.div whileHover={{ background: '#aac4ff' }}>
              <img src={hero1} alt="hero-1" draggable="false" />
            </motion.div>
          </motion.div>

          <motion.div
            ref={rightDesginScope}
            initial={{ opacity: 0, x: 100, y: 100 }}
            drag
            className="absolute -right-64 -top-16 hidden lg:block"
          >
            <motion.div whileHover={{ background: '#b1b2ff' }}>
              <img src={hero2} alt="hero-2" draggable="false" />
            </motion.div>
          </motion.div>

          {/* Pointer and position */}
          <motion.div
            ref={leftPointerScope}
            initial={{ opacity: 0, x: -200, y: 100 }}
            className="absolute left-80 top-96 hidden lg:block"
          >
            <Pointer name="anita" />
          </motion.div>

          <motion.div
            ref={rightPointerScope}
            initial={{ opacity: 0, x: 200, y: 100 }}
            className="absolute right-80 -top-4 hidden lg:block"
          >
            <Pointer name="angela" color="alternate" />
          </motion.div>

          {/* Hero-section */}
          <motion.div className="flex justify-center">
            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-full text-neutral-950 font-semibold">
              ✨ Get latest version
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-medium mt-6 text-center max-w-6xl mx-auto">
            Streamline your design process and elevate productivity
          </h1>
          <p className="text-center text-md text-white/50 mt-8 max-w-2xl mx-auto">
            Its robust integrations and customizable templates eliminate bottlenecks,
            enabling faster project completion without compromising quality.
          </p>
        </div>

      </div>
      <Form />

      {/* Custom Cursor */}
      {isInside && (
        <Cursor position={position} />
      )}
    </section>
  );
};

export default Hero;
