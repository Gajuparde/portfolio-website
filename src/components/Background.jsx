const Background = () => (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] bg-violet-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-fuchsia-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-blue-100/30 rounded-full mix-blend-multiply filter blur-[60px] opacity-60 animate-blob animation-delay-3000"></div>
        <div className="noise-overlay"></div>
    </div>
);

export default Background;
