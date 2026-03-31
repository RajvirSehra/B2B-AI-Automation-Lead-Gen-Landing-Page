import React, { useRef, useEffect, useState } from 'react';

export default function FoundersNote() {
  const [isVisible, setIsVisible] = useState(false);
  const sigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (sigRef.current) observer.observe(sigRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative">
        <div className="absolute top-0 right-12 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-b-xl" />
        
        <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-gray-700" />
          A Note from the Founder
        </h3>
        
        <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8 italic">
          "I started Automate AI because I watched brilliant teams burn out doing the work of robots. We don't just build scripts; we build the infrastructure that lets you scale your genius, securely and effortlessly. Your manual bottlenecks are costing you more than just time – they're costing you momentum."
        </blockquote>
        
        <div className="flex items-end justify-between" ref={sigRef}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              JS
            </div>
            <div>
              <p className="text-white font-semibold">Jonathan Smith</p>
              <p className="text-sm text-gray-500">Founder & CEO, Automate AI</p>
            </div>
          </div>
          
          <div className="w-48 h-16 opacity-80 mix-blend-screen hidden md:block">
            {/* Animated SVG Signature */}
            <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                className={isVisible ? "signature-animate" : ""}
                d="M 60,100 C 60,100 80,40 100,40 C 120,40 100,100 120,100 C 130,100 140,80 150,60 C 160,40 150,110 160,110 C 170,110 180,90 200,90 M 220,100 C 220,100 240,40 260,40 C 280,40 260,100 280,100 C 290,100 300,80 310,60 C 320,40 310,110 320,110 C 330,110 340,90 350,90" 
                stroke="url(#sig-gradient)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="1000"
                strokeDashoffset={isVisible ? "0" : "1000"}
              />
              <defs>
                <linearGradient id="sig-gradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Required CSS to be added to index.css or style tag */}
      <style dangerouslySetInnerHTML={{__html: `
        .signature-animate {
          animation: drawSignature 2s ease-out forwards;
        }
        @keyframes drawSignature {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </div>
  );
}
