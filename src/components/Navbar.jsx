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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { name: 'Home', href: '/#home' },
        { name: 'Work', href: '/#work' },
        { name: 'Services', href: '/#services' },
        { name: 'Process', href: '/#process' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
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

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3 relative z-50">
                        <button
                            className="p-2 text-black bg-white/60 rounded-full backdrop-blur-md shadow-md border border-black/5 flex items-center justify-center transition-all active:scale-95"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                {/* Backdrop with extreme blur */}
                <div className={`absolute inset-0 bg-white/95 backdrop-blur-2xl transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

                <div className="relative z-10 flex flex-col items-center space-y-8 w-full px-6">
                    {/* Menu Header (Close Only) */}
                    <div className="absolute top-0 right-0 p-8">
                        <button
                            className="p-2 text-black bg-black/5 rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {links.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-5xl font-black font-header tracking-tighter text-black hover:text-blue-600 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className={`pt-12 transition-all duration-700 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">thegrafivox@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
