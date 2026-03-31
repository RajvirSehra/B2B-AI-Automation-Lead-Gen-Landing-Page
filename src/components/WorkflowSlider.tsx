import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';

export default function WorkflowSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent | ReactMouseEvent) => handleMove((e as MouseEvent).clientX);
  const onTouchMove = (e: TouchEvent | ReactTouchEvent) => handleMove((e as TouchEvent).touches[0].clientX);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-6 relative cursor-ew-resize">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white mb-4">See the Difference</h3>
        <p className="text-gray-400">Drag the slider to compare manual chaos with AI-powered clarity.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* BEFORE IMAGE (Bottom Layer) */}
        <div className="absolute inset-0 bg-gray-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] flex items-center justify-start p-8 md:p-16 border border-gray-800">
           <div className="max-w-xs space-y-4 pt-10">
             <div className="w-full h-12 bg-gray-800 rounded-md border border-red-500/30 animate-pulse flex items-center px-4 line-through text-red-400/50">Manual Data Entry</div>
             <div className="w-full h-12 bg-gray-800 rounded-md border border-red-500/30 animate-pulse flex items-center px-4 line-through text-red-400/50">CSV Imports</div>
             <div className="w-full h-12 bg-gray-800 rounded-md border border-red-500/30 animate-pulse flex items-center px-4 line-through text-red-400/50">Email Follow-ups</div>
             <div className="w-full h-12 bg-gray-800 rounded-md border border-red-500/30 flex items-center px-4 text-gray-500">Endless searching...</div>
           </div>
           
           <div className="absolute top-6 left-6 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm z-10">
             Before: 15 hrs / week
           </div>
        </div>

        {/* AFTER IMAGE (Top Layer, clipped) */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900/40 bg-[linear-gradient(to_right,#1b2b3b_1px,transparent_1px),linear-gradient(to_bottom,#1b2b3b_1px,transparent_1px)] bg-[size:48px_48px] border-y border-r border-blue-500/20"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <div className="absolute top-6 right-6 px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm z-10">
             After: 0.5 hrs / week
           </div>

           <div className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-16 max-w-full">
             <div className="w-[300px] bg-blue-950/50 rounded-lg p-6 border border-blue-500/30 backdrop-blur-md relative transform hover:scale-105 transition-transform duration-300">
               <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center animate-ping text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                 ✓
               </div>
               <h4 className="text-white font-bold mb-2">Automated Pipeline Active</h4>
               <div className="space-y-2">
                 <div className="flex justify-between text-xs text-gray-300">
                   <span>Data Synced</span> <span className="text-blue-400">100%</span>
                 </div>
                 <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                   <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full w-full" />
                 </div>
                 <p className="text-[10px] text-gray-500 mt-2 flex items-center">
                   <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
                   All systems operational
                 </p>
               </div>
             </div>
           </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:bg-blue-400 transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border border-gray-200">
             <div className="flex gap-1 text-gray-400 font-bold tracking-tighter">
                <span>{'<'}</span><span>{'>'}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
