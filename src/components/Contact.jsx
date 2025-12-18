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
        <section id="contact" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-black transition-all duration-200 hover:scale-110 hover:bg-[#3B82F6] hover:text-white hover:shadow-lg"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-3xl border border-white/50 text-black rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.05)]">
                <div className="grid lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="lg:col-span-1 p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[80px] -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-[0.9] font-header tracking-tighter">
                                Let's build<br />
                                <span className="text-blue-600">the future</span><br />
                                together.
                            </h2>
                            <p className="text-lg text-zinc-500 mb-10 max-w-sm font-medium">
                                Have a project in mind? Reach out and let's discuss how we can bring your vision to life.
                            </p>

                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Direct Contact</p>
                                <a href="mailto:thegrafivox@gmail.com" className="text-2xl md:text-3xl font-bold font-header text-black hover:text-blue-600 transition-colors duration-300">
                                    thegrafivox@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-1 p-12 md:p-16 bg-white/60">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Name</label>
                                    <input required type="text" name="name" className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-600/30 focus:bg-white transition-all duration-300 font-medium placeholder:text-zinc-300 shadow-sm" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Email</label>
                                    <input required type="email" name="email" className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-600/30 focus:bg-white transition-all duration-300 font-medium placeholder:text-zinc-300 shadow-sm" placeholder="hello@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Message</label>
                                <textarea required rows="6" name="message" className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-600/30 focus:bg-white transition-all duration-300 font-medium placeholder:text-zinc-300 shadow-sm resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ y: -5, shadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full h-[70px] bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-lg"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={24} />
                                        <span>Sending...</span>
                                    </>
                                ) : status === "success" ? (
                                    <>Success! <CheckCircle2 size={24} /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
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
