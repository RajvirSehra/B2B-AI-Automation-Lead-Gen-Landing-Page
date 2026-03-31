import React from 'react';
import { Briefcase, HeartPulse, Truck, Monitor, ShoppingBag, Banknote } from 'lucide-react';

export default function SectorCloud() {
  const sectors = [
    { name: 'Finance & Banking', icon: Banknote },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Logistics', icon: Truck },
    { name: 'SaaS / Tech', icon: Monitor },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Legal Services', icon: Briefcase },
  ];

  return (
    <div className="w-full relative overflow-hidden bg-gray-950 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h4 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-10">Optimized for High-Friction Industries</h4>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div 
                key={sector.name}
                className="group relative flex items-center gap-3 px-6 py-4 rounded-full bg-gray-900/50 border border-gray-800 hover:border-gray-500 hover:bg-white cursor-pointer transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-gray-500 group-hover:text-black transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-gray-400 group-hover:text-black font-medium transition-colors duration-300 whitespace-nowrap">
                  {sector.name}
                </span>
                
                {/* Glow behind on hover */}
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500 pointer-events-none -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
