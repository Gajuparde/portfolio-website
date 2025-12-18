import React from 'react';

const Footer = () => (
    <footer className="py-24 relative z-10 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* White Logo */}
            <div className="text-2xl font-bold tracking-tight flex items-center gap-1 text-white mb-12">
                <span className="font-header">GRAFIVOX</span>
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
                <a href="https://instagram.com/thegrafivox" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-blue-500 transition-colors">Instagram</a>
                <a href="https://linkedin.com/in/gajendra-parde" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-blue-500 transition-colors">LinkedIn</a>
                <a href="https://dribbble.com/thegrafivox" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-blue-500 transition-colors">Dribbble</a>
            </div>

            <div className="w-full h-[1px] bg-white/5 mb-12"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    &copy; 2025 GRAFIVOX DESIGN STUDIO
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    BASED IN INDIA • SERVING GLOBALLY
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
