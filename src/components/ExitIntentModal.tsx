import React, { useState, useEffect } from 'react';
import { Flag, X, ArrowRight } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves top of window and hasn't triggered before
      if (e.clientY <= 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div 
        className="w-full max-w-2xl bg-gray-900 border border-red-500/20 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden animate-in zoom-in-95 duration-300 relative group"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-gradient-to-br from-red-600 to-orange-500 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
            <Flag className="w-16 h-16 text-white mb-4 drop-shadow-lg" />
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Wait! Don't scale the chaos.</h3>
          </div>
          
          <div className="md:w-3/5 p-8 relative">
            <h4 className="text-xl font-bold text-white mb-4">
              Get the <span className="text-red-400">"5 Red Flags"</span> Guide
            </h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Before you hire another administrator or buy another SaaS tool, read our free guide on the 5 hidden signs your workflow is silently bleeding revenue.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <input 
                required
                type="email" 
                placeholder="Where should we send it?" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all text-sm"
              />
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 text-sm"
              >
                Send Me The Free Guide <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-gray-500 text-center mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
