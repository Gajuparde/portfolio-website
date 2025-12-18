import React, { useRef, useState } from 'react';
import { Instagram, Linkedin, Dribbble, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            formRef.current.reset();
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };



    const socialLinks = [
        { icon: Instagram, url: "https://instagram.com/thegrafivox", label: "Instagram" },
        { icon: Linkedin, url: "https://linkedin.com/in/gajendra-parde", label: "LinkedIn" },
        { icon: Dribbble, url: "https://dribbble.com/thegrafivox", label: "Dribbble" },
    ];

    return (
        <section id="contact" className="py-24 px-6 relative z-10 bg-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto mb-16">
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 border border-white/5 text-zinc-400 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-white"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-zinc-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="lg:col-span-1 p-12 md:p-16 flex flex-col justify-between">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.85] font-header tracking-tighter">
                                Let's build<br />
                                <span className="text-blue-600">the future</span><br />
                                together.
                            </h2>
                            <p className="text-lg text-zinc-400 mb-12 max-w-sm font-medium leading-relaxed">
                                Have a project in mind? Reach out and let's discuss how we can bring your vision to life.
                            </p>

                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Direct Contact</p>
                                <a href="mailto:thegrafivox@gmail.com" className="block text-2xl md:text-4xl font-black font-header text-white hover:text-blue-500 transition-colors duration-300">
                                    thegrafivox@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-1 p-12 md:p-16 bg-zinc-900/50">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 text-white">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 block ml-1">Name</label>
                                    <input required type="text" name="name" className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 font-medium placeholder:text-zinc-700 text-white" placeholder="Gajendra Parde" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 block ml-1">Email</label>
                                    <input required type="email" name="email" className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 font-medium placeholder:text-zinc-700 text-white" placeholder="hello@grafivox.com" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 block ml-1">Project Details</label>
                                <textarea required rows="5" name="message" className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 font-medium placeholder:text-zinc-700 text-white resize-none" placeholder="What amazing thing are we creating?"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ y: -2, scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full h-16 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        <span>Sending...</span>
                                    </>
                                ) : status === "success" ? (
                                    <>Sent Successfully! <CheckCircle2 size={18} /></>
                                ) : (
                                    <>Start Project <Send size={16} /></>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
