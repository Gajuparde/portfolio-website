import React from 'react';
import { Star } from 'lucide-react';

const Marquee = () => (
    <div className="w-full bg-white text-black py-4 overflow-hidden whitespace-nowrap border-y border-black/5 relative z-10 rotate-1 scale-105 shadow-md my-12 group">
        {/* Edge Gradents */}
        <div className="absolute inset-0 z-20 pointer-events-none box-content">
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="flex animate-marquee motion-safe:animate-marquee motion-reduce:animate-none group-hover:pause-animation items-center">
            {[...Array(3)].map((_, i) => (
                <React.Fragment key={i}>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mx-8">UI/UX Design</span>
                    <Star size={24} className="text-blue-500" fill="currentColor" />
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mx-8">Branding</span>
                    <Star size={24} className="text-purple-500" fill="currentColor" />
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mx-8">Packaging</span>
                    <Star size={24} className="text-pink-500" fill="currentColor" />
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default Marquee;
