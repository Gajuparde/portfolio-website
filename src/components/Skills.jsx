
import React from 'react';
import { motion } from 'framer-motion';

import {
    PenTool,
    Image,
    Edit3,
    Frame,
    ShieldCheck,
    Hexagon,
    FileImage,
    LayoutTemplate,
    Package
} from 'lucide-react';

const Skills = () => {
    const tools = [
        { name: "Adobe Illustrator", icon: PenTool, level: "Expert" },
        { name: "Adobe Photoshop", icon: Image, level: "Expert" },
        { name: "CorelDRAW", icon: Edit3, level: "Advanced" },
        { name: "Figma", icon: Frame, level: "Expert" }
    ];

    const expertise = [
        { name: "Packaging Design" },
        { name: "Branding & Identity" },
        { name: "Logo Design" },
        { name: "Poster & Visual Design" },
        { name: "UI/UX Design" }
    ];

    return (
        <section id="services" className="py-24 px-6 relative z-10 text-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
                    {/* Left Side: Software Skills */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-blue-600 font-bold font-header text-xl">01.</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-header tracking-tight">Software Skills</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square p-6 md:p-8 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex flex-col items-center justify-center text-center hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group"
                                >
                                    <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <tool.icon size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 font-header">{tool.name}</h3>
                                    <p className="text-xs font-bold text-blue-500/50 uppercase tracking-widest">{tool.level}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Services */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-blue-600 font-bold font-header text-xl">02.</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-header tracking-tight">Services</h2>
                        </div>
                        <div className="space-y-4">
                            {expertise.map((service, i) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 md:p-8 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center gap-8 hover:bg-white/60 hover:shadow-lg transition-all duration-500 group cursor-default"
                                >
                                    <span className="text-blue-600/30 font-bold font-header text-2xl group-hover:text-blue-600 transition-colors duration-500">0{i + 1}</span>
                                    <h3 className="text-xl md:text-2xl font-bold font-header group-hover:translate-x-2 transition-transform duration-500">{service.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
