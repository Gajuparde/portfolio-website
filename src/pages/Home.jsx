import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import WorkGrid from '../components/WorkGrid';
import Marquee from '../components/Marquee';
import Contact from '../components/Contact';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <WorkGrid />
            <Contact />
        </>
    );
};

export default Home;
