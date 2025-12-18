import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';

const WorkGrid = () => {
    const [filter, setFilter] = useState("All");
    const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
    const categories = ["All", "UI/UX", "Branding", "Logos", "Packaging", "Posters"];

    return (
        <section id="work" className="py-24 px-6 relative z-10 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
                        <p className="text-gray-600">A curated selection of projects.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`h-[40px] px-[20px] rounded-[20px] text-sm font-semibold transition-all duration-300 flex items-center justify-center ${filter === cat
                                    ? 'bg-[#3B82F6] text-white shadow-lg'
                                    : 'bg-white border border-[#E5E7EB] text-[#374151] hover:brightness-90 transition-all duration-200'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                to={`/work/${project.id}`}
                                className="group cursor-pointer block relative rounded-3xl"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 border border-zinc-200 shadow-sm bg-zinc-50">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        src={project.imageUrl}
                                        alt={`Mockup of ${project.title}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Glassmorphism Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                            <div className="bg-white/90 backdrop-blur-md px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] text-black border border-white/20 shadow-2xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center gap-3">
                                                Discover Case Study <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 transition-all duration-500 group-hover:translate-x-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-bold font-header text-black mb-4 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-500 border border-zinc-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-600 transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkGrid;
