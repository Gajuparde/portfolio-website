import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (isOpen) setIsOpen(false);
    }, [location, isOpen]);

    const links = [
        { name: 'Home', href: '/#home' },
        { name: 'Work', href: '/#work' },
        { name: 'Services', href: '/#services' },
        { name: 'Process', href: '/#process' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? 'py-4 bg-white/80 backdrop-blur-3xl border-b border-black/5 shadow-sm'
                : 'py-8 bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="relative z-50 text-xl font-bold tracking-tight flex items-center gap-1 text-black group">
                        <span className="font-header text-2xl">GRAFIVOX</span>
                        <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300"></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-black/5 bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all text-zinc-500 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-3 relative z-50">
                        <button
                            className="md:hidden p-2 text-black bg-white/60 rounded-full backdrop-blur-md shadow-md border border-black/5"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <div className={`fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-8 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <button
                    className="absolute top-6 right-6 p-2 text-black"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl font-bold font-header hover:text-blue-600 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </>
    );
};

export default Navbar;
