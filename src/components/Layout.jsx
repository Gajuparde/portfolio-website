import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen transition-colors duration-500 bg-white text-black">
            <Background />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
