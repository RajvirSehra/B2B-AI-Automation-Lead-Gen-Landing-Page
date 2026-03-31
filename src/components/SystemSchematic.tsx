import React, { useRef, useEffect, useState } from 'react';

export default function SystemSchematic() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
        // Only observe once
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-6 relative" ref={containerRef}>
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">How it works</h3>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A seamless flow from chaotic inputs to structured, scalable outputs.
        </p>
      </div>

      <div className="w-full h-auto bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_50%)]" />
        
        {/* Animated SVG Pipeline */}
        <svg viewBox="0 0 1000 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Lines */}
          <path 
            d="M 150 200 L 350 200 L 450 100 L 650 100" 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="4"
            className={inView ? "draw-line delay-0" : "opacity-0"}
          />
          <path 
            d="M 150 200 L 350 200 L 450 300 L 650 300" 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="4"
            className={inView ? "draw-line delay-1" : "opacity-0"}
          />
          <path 
            d="M 650 100 L 750 100 L 800 200 L 900 200" 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="4"
            className={inView ? "draw-line delay-2" : "opacity-0"}
          />
          <path 
            d="M 650 300 L 750 300 L 800 200 L 900 200" 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="4"
            className={inView ? "draw-line delay-3" : "opacity-0"}
          />

          {/* Animated Particles flowing through lines */}
          {inView && (
            <>
              <circle r="6" fill="#06b6d4" filter="url(#glow)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 150 200 L 350 200 L 450 100 L 650 100 L 750 100 L 800 200 L 900 200" />
              </circle>
              <circle r="6" fill="#3b82f6" filter="url(#glow)">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 150 200 L 350 200 L 450 300 L 650 300 L 750 300 L 800 200 L 900 200" />
              </circle>
              <circle r="6" fill="#60a5fa" filter="url(#glow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M 150 200 L 350 200 L 450 100 L 650 100 L 750 100 L 800 200 L 900 200" />
              </circle>
            </>
          )}

          {/* Nodes */}
          <g className={inView ? "pop-node delay-0" : "opacity-0"}>
            <rect x="50" y="150" width="120" height="100" rx="12" fill="#111827" stroke="#374151" strokeWidth="2" />
            <text x="110" y="195" fill="#9ca3af" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Data Sources</text>
            <text x="110" y="220" fill="#6b7280" fontSize="10" textAnchor="middle" fontFamily="sans-serif">(Email, CRM, CSV)</text>
          </g>

          <g className={inView ? "pop-node delay-1" : "opacity-0"}>
            <rect x="350" y="50" width="120" height="100" rx="12" fill="#111827" stroke="#3b82f6" strokeWidth="2" filter="url(#glow)" />
            <text x="410" y="95" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AI Processing</text>
            <text x="410" y="120" fill="#60a5fa" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Categorize & Extract</text>
          </g>

          <g className={inView ? "pop-node delay-2" : "opacity-0"}>
            <rect x="350" y="250" width="120" height="100" rx="12" fill="#111827" stroke="#06b6d4" strokeWidth="2" filter="url(#glow)" />
            <text x="410" y="295" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Logic Routing</text>
            <text x="410" y="320" fill="#22d3ee" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Rules & Webhooks</text>
          </g>

          <g className={inView ? "pop-node delay-3" : "opacity-0"}>
            <rect x="630" y="50" width="120" height="100" rx="12" fill="#111827" stroke="#374151" strokeWidth="2" />
            <text x="690" y="95" fill="#9ca3af" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Database</text>
            <text x="690" y="220" fill="#6b7280" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Sync Flow</text>
          </g>

          <g className={inView ? "pop-node delay-4" : "opacity-0"}>
            <rect x="630" y="250" width="120" height="100" rx="12" fill="#111827" stroke="#374151" strokeWidth="2" />
            <text x="690" y="295" fill="#9ca3af" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Alerts</text>
            <text x="690" y="320" fill="#6b7280" fontSize="10" textAnchor="middle" fontFamily="sans-serif">(Slack, Teams)</text>
          </g>

          <g className={inView ? "pop-node delay-5" : "opacity-0"}>
            <rect x="850" y="150" width="120" height="100" rx="12" fill="#111827" stroke="#22c55e" strokeWidth="2" />
            <circle cx="910" cy="190" r="16" fill="#15803d" />
            <path d="M 903 190 L 908 195 L 918 185" fill="none" stroke="#fff" strokeWidth="2" />
            <text x="910" y="230" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Automated Output</text>
          </g>
        </svg>

        {/* Required CSS to be added to index.css or style tag */}
        <style dangerouslySetInnerHTML={{__html: `
          .draw-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 2s ease-in-out forwards;
          }
          .pop-node {
            transform-origin: center;
            animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .delay-0 { animation-delay: 0.2s; }
          .delay-1 { animation-delay: 0.6s; }
          .delay-2 { animation-delay: 1.0s; }
          .delay-3 { animation-delay: 1.4s; }
          .delay-4 { animation-delay: 1.8s; }
          .delay-5 { animation-delay: 2.2s; }
          
          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
          @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}} />
      </div>
    </div>
  );
}
