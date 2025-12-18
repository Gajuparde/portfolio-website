import React, { useRef, useState } from 'react';
import { Instagram, Linkedin, Dribbble, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");

        // REPLACE WITH YOUR ACTUAL EMAILJS SERVICE_ID, TEMPLATE_ID, AND PUBLIC_KEY
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus("success");
                formRef.current.reset();
                setTimeout(() => setStatus("idle"), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            });
    };



    const socialLinks = [
        { icon: Instagram, url: "https://instagram.com/thegrafivox", label: "Instagram" },
        { icon: Linkedin, url: "https://linkedin.com/in/gajendra-parde", label: "LinkedIn" },
        { icon: Dribbble, url: "https://dribbble.com/thegrafivox", label: "Dribbble" },
    ];

    return (
        <section id="contact" className="py-24 px-6 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-black transition-all duration-300 hover:scale-110 hover:bg-[#3B82F6] hover:text-white"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-white border border-zinc-200 text-black rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="lg:col-span-1 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden bg-zinc-50/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-black leading-[0.9] font-header tracking-tighter">
                                Let's build<br />
                                <span className="text-blue-600">the future</span><br />
                                together.
                            </h2>
                            <p className="text-lg text-zinc-600 mb-10 max-w-sm font-medium">
                                Have a project in mind? Reach out and let's discuss how we can bring your vision to life.
                            </p>

                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Direct Contact</p>
                                <a href="mailto:thegrafivox@gmail.com" className="text-xl md:text-3xl font-bold font-header text-black hover:text-blue-600 transition-colors duration-300 break-all">
                                    thegrafivox@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-1 p-10 md:p-16 bg-white">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-black ml-1">Name</label>
                                    <input required type="text" name="name" className="w-full bg-zinc-50 border border-zinc-300 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 font-medium placeholder:text-zinc-400 text-black" placeholder="Your full name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-black ml-1">Email</label>
                                    <input required type="email" name="email" className="w-full bg-zinc-50 border border-zinc-300 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 font-medium placeholder:text-zinc-400 text-black" placeholder="hello@company.com" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase tracking-widest text-black ml-1">Message</label>
                                <textarea required rows="5" name="message" className="w-full bg-zinc-50 border border-zinc-300 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all duration-300 font-medium placeholder:text-zinc-400 text-black resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full h-[64px] bg-black text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl text-lg hover:bg-zinc-900"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sending...</span>
                                    </>
                                ) : status === "success" ? (
                                    <>Sent Successfully! <CheckCircle2 size={20} /></>
                                ) : status === "error" ? (
                                    <>Failed to Send. Try Again!</>
                                ) : (
                                    <>Send Message <Send size={18} /></>
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
