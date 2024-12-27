import React, { useEffect, useRef } from "react";
import Tag from "./ui/tag";
import Form from "./ui/form";
import { cta1, cta2 } from "../utils";
import { useScroll, useTransform, motion } from "framer-motion";

const Cta = () => {
    const refContainer = useRef(null);
    // useScroll targets the progress of y axis
    // this information is gotten from the ref container.
    // defines the scroll range 
    const { scrollYProgress } = useScroll({
        target: refContainer,
        offset: ["start end", "end end"],
    });
    //  read docs 
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) =>
            value
        );
        return () => unsubscribe();
    }, [scrollYProgress]);
    const translateX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    return (
        <section
            ref={refContainer}
            className="py-48 flex flex-col items-center justify-center overflow-x-clip relative z-10"
        >
            <div className="container">
                <div className="relative">
                    {/* Draggable motion images */}
                    <motion.div
                        drag
                        className="absolute top-20 left-42 hidden lg:block"
                        style={{ x: translateX }}
                    >
                        <img
                            src={cta1}
                            alt="First Call-to-Action Image"
                            draggable="false"
                            className="w-80"
                        />
                    </motion.div>
                    <motion.div
                        drag
                        className="absolute top-10 right-40 hidden lg:block"
                        style={{ x: translateX }}
                    >
                        <img
                            src={cta2}
                            alt="Second Call-to-Action Image"
                            draggable="false"
                            className="w-80"
                        />
                    </motion.div>

                    {/* Main content */}
                    <div className="flex flex-col justify-center">
                        <Tag className="max-w-xl mx-auto">Cta</Tag>
                        <div>
                            <h2 className="text-4xl font-medium text-center mt-6 mx-auto mb-4">
                                Take the next step today.
                            </h2>
                            <p className="text-white/50 text-center">
                                Simplify your design process and boost productivity with robust
                                integrations and customizable templates.
                                <br />
                                Eliminate bottlenecks and complete projects faster without
                                compromising quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </section>
    );
};

export default Cta;
