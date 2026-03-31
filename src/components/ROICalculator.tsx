import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, Users } from 'lucide-react';

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(35);

  const WEEKS_PER_YEAR = 52;
  const AUTOMATION_SAVINGS_PERCENTAGE = 0.8; // Assume 80% reduction

  const totalManualHoursYearly = teamSize * hoursPerWeek * WEEKS_PER_YEAR;
  const hoursSavedYearly = Math.round(totalManualHoursYearly * AUTOMATION_SAVINGS_PERCENTAGE);
  const costSavedYearly = hoursSavedYearly * hourlyRate;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 max-w-3xl mx-auto w-full shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500" />
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 shadow-inner">
          <Calculator className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Automation ROI Calculator</h3>
          <p className="text-sm text-gray-400">See your potential reclaimed time and value in real-time</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          {/* Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500" />
                Team Size
              </label>
              <span className="text-blue-400 font-bold">{teamSize} {teamSize === 1 ? 'person' : 'people'}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Manual Hours */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                Manual Hours / Week / Person
              </label>
              <span className="text-cyan-400 font-bold">{hoursPerWeek} hrs</span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>

          {/* Avg Hourly Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" />
                Avg. Hourly Rate
              </label>
              <span className="text-green-400 font-bold">${hourlyRate}/hr</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6 flex flex-col justify-center relative glow-effect">
          <div className="mb-6 pb-6 border-b border-gray-700/50">
            <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-semibold">Time Reclaimed (Yearly)</p>
            <div className="text-4xl md:text-5xl font-extrabold text-white flex items-baseline gap-2">
              {hoursSavedYearly.toLocaleString()} <span className="text-xl text-blue-400 font-medium">hrs</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-semibold">Value Unlocked (Yearly)</p>
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              ${costSavedYearly.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              *Assuming an 80% reduction in manual processing time using AI automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
