// imports
import { useState, useEffect } from 'react';
import Button from './ui/button';
import { logo } from '../utils';
import { navs } from '../constants';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  // toggles navigation
  const [toogle, setToggle] = useState(false);
  // handles the toggle and only re-render when toggle is
  // re-rendered 
  useEffect(() => {
  }, [toogle]);

  return (
    <>
      <nav className="py-4 lg:py-8 flex items-center justify-center fixed w-full top-0 z-50">
        <div className="container">
          <div className='border border-white/15 rounded-[24px] md:rounded-full bg-neutral-950/70 backdrop-blur'>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:pr-2 p-2 px-4 items-center">
              {/* Logo Section */}
              <div className="flex items-center gap-2">
                <img src={logo} alt="oseries" className="h-8 w-auto ml-2" />
                <span className="font-bold text-2xl">Oseries</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex justify-center items-center gap-6 text-white">
                {Array.isArray(navs) &&
                  navs.map((nav, i) => (
                    <a href={nav.href} key={i} className="hover:underline">
                      {nav.label}
                    </a>
                  ))}
              </div>

              {/* Buttons Section */}
              <div className="flex justify-end gap-4">
                {toogle ? (
                  <button className='h-10 w-10 flex items-center justify-center bg-neutral-900 md:hidden border border-white/10 rounded-xl transition' onClick={() => setToggle(!toogle)}>
                    <X className="w-4 h-4 text-white/80" />
                  </button>
                ) : (
                  <button className='h-10 w-10 flex items-center justify-center bg-neutral-900 md:hidden border border-white/10 rounded-xl transition' onClick={() => setToggle(!toogle)}>
                    <Menu className="w-4 h-4 text-white/100" />
                  </button>
                )}
                {/* custom buttons */}

                <Button variant="secondary" className="hidden md:inline-flex items-center">
                  Log In
                </Button>
                <Button variant="primary" className="hidden md:inline-flex items-center">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Animate presence aanimates the hamburger menu*/}
            <AnimatePresence>
              {toogle && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className='overflow-hidden'
                >
                  <div className='flex flex-col items-center gap-4 py-6 md:hidden'>
                    {/* motion is added to animation to ensure it works the nav also has a staggered animation */}

                    {navs.map((nav, i) => (
                      <motion.a
                        key={i}
                        href={nav.href}
                        className="opacity-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.5,
                          ease: [.22, .03, .26, 1],
                        }}
                      >
                        {nav.label}
                      </motion.a>
                    ))}
                    <motion.span initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: navs.length * 0.1, duration: 0.5, ease: [.22, .03, .26, 1] }}
                      className="opacity-0"
                    >
                      <Button
                        variant="secondary"
                      >
                        Log In
                      </Button>
                    </motion.span>
                    <motion.span initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: navs.length * 0.1 + 0.1, duration: 0.5, ease: [.22, .03, .26, 1] }}
                      className="opacity-0"
                    >
                      <Button
                        variant="primary"
                      >
                        Sign Up
                      </Button>
                    </motion.span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className='pb-[100px]'></div>
    </>

  );
};

export default Nav;
