import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import profilePic from '../assets/profile-pic.jpg';

const About = () => {
    return (
        <section className="py-24 px-6 relative z-10 text-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Image with Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/50">
                            <img
                                src={profilePic}
                                alt="Gajendra Parde"
                                className="w-full h-full object-cover aspect-[4/5] scale-110 hover:scale-100 transition-transform duration-700"
                            />
                        </div>

                        {/* Circular Text Badge */}
                        <div className="absolute -bottom-10 -right-10 md:-bottom-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 bg-white border border-black/5 text-blue-600 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite] shadow-2xl backdrop-blur-xl">
                            <svg viewBox="0 0 100 100" width="100" height="100" className="w-full h-full p-4">
                                <path
                                    id="circlePath"
                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                    fill="transparent"
                                />
                                <text fontSize="10" fontWeight="900" letterSpacing="2">
                                    <textPath xlinkHref="#circlePath" className="uppercase font-header" fill="currentColor">
                                        Established 2023 • Grafivox Design Studio •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Star size={24} className="fill-blue-600" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-8 font-header tracking-tighter">
                                Strategic<br />
                                <span className="text-zinc-300">design</span> for<br />
                                modern brands.
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-xl leading-relaxed text-zinc-500 font-medium max-w-lg"
                        >
                            I specialize in creating visual identities that increase brand recognition and user engagement. My approach combines strategic thinking with refined craftsmanship to help forward-thinking companies stand out.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
