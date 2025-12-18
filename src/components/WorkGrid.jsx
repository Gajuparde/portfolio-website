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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={`/work/${project.id}`}
                                className="group cursor-pointer block relative rounded-2xl transition-all duration-500 hover:-translate-y-3"
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-white/50 shadow-sm bg-white/30 backdrop-blur-sm">
                                    <img
                                        src={project.imageUrl}
                                        alt={`Mockup of ${project.title}`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                                        <span className="text-white bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold transition-all hover:bg-white hover:text-black transform translate-y-4 group-hover:translate-y-0 duration-500">
                                            View Case Study
                                        </span>
                                    </div>

                                    {/* Circular View Button */}
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/90 text-black transition-all duration-300 shadow-xl hover:scale-110 hover:bg-blue-600 hover:text-white transform -translate-y-4 group-hover:translate-y-0">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <h3 className="text-2xl font-bold font-header group-hover:text-blue-600 transition-colors duration-300 italic-hover">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/60 border border-white/50 text-gray-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
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
