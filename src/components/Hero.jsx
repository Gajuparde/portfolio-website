import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative z-10 selection:bg-blue-500/30">
            <div className="space-y-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/5 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase border border-blue-500/10 backdrop-blur-md mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                    Available for Projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-black font-header"
                >
                    Graphic <br />
                    <span className="text-zinc-300">Designer.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                >
                    <p className="text-[14px] md:text-[16px] font-black uppercase tracking-[0.3em] text-blue-600/60">
                        UI/UX • Branding • Packaging Specialist
                    </p>

                    <p className="text-lg md:text-2xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
                        Crafting distinct visual identities and digital experiences for forward-thinking brands.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap justify-center gap-6 pt-6"
                >
                    <a href="#work" className="group h-[60px] px-10 bg-zinc-900 text-white rounded-full font-bold transition-all hover:scale-105 hover:bg-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-3 text-lg">
                        View Work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="h-[60px] px-10 bg-white border border-black/10 text-black rounded-full font-bold transition-all hover:scale-105 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center gap-2 text-lg shadow-sm"
                    >
                        Hire Me <ArrowUpRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
