import React from 'react';

const Footer = () => (
    <footer className="py-20 relative z-10 bg-white/30 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <div className="w-20 h-[1px] bg-black/5 mb-12"></div>

            <h2 className="text-3xl font-bold font-header tracking-tighter mb-8">GRAFIVOX</h2>

            <div className="flex gap-8 mb-12">
                <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-blue-600 transition-colors">Instagram</a>
                <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-blue-600 transition-colors">Dribbble</a>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                &copy; 2025 GRAFIVOX DESIGN STUDIO • MADE WITH PASSION
            </p>
        </div>
    </footer>
);

export default Footer;
