import React from 'react';
import { ArrowDownRight, Clock, Zap } from 'lucide-react';

export default function ImpactSnapshots() {
  const snapshots = [
    {
      title: "Invoice Processing Pipeline",
      manualTime: "40 hrs/wk",
      automatedTime: "2 hrs/wk",
      reduction: "95%",
      chartData: [95, 90, 80, 50, 20, 5],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Client Onboarding Flow",
      manualTime: "12 days",
      automatedTime: "4 hours",
      reduction: "98%",
      chartData: [90, 85, 80, 40, 10, 2],
      color: "from-cyan-500 to-green-400"
    },
    {
      title: "Cross-Platform Data Sync",
      manualTime: "15 hrs/wk",
      automatedTime: "Real-time",
      reduction: "100%",
      chartData: [80, 75, 70, 30, 0, 0],
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {snapshots.map((snap, i) => (
        <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-300">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500 block z-0" />
          
          <div className="relative z-10">
            <h4 className="text-white font-semibold text-lg mb-6">{snap.title}</h4>
            
            <div className="flex items-end justify-between mb-4 border-b border-gray-800 pb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Reduction</p>
                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${snap.color} flex items-center`}>
                  {snap.reduction} <ArrowDownRight className="w-5 h-5 ml-1 text-cyan-400" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1 line-through">{snap.manualTime}</p>
                <p className="text-sm font-bold text-white flex items-center justify-end gap-1">
                  <Zap className="w-3 h-3 text-cyan-400" /> {snap.automatedTime}
                </p>
              </div>
            </div>

            {/* Micro Chart / Data Viz */}
            <div className="flex items-end h-16 gap-1 w-full mt-6">
              {snap.chartData.map((val, idx) => (
                <div 
                  key={idx} 
                  className={`flex-1 rounded-t-sm bg-gradient-to-t ${snap.color} ${idx === snap.chartData.length - 1 ? 'opacity-100' : 'opacity-20'} transition-all duration-700 group-hover:opacity-100 delay-[${idx * 100}ms]`}
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 max-w-full">
               <span className="text-[10px] text-gray-600">Manual</span>
               <span className="text-[10px] text-gray-600">Automated</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
