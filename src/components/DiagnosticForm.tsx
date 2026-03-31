import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, LayoutGrid, Clock, AlertTriangle, Building, Database, BarChart3, Mail, User, Phone } from 'lucide-react';

export default function DiagnosticForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    painPoint: '',
    name: '',
    email: '',
    phone: ''
  });

  const industries = [
    { id: 'finance', label: 'Finance & Accounting', icon: BarChart3 },
    { id: 'logistics', label: 'Logistics & Supply', icon: LayoutGrid },
    { id: 'healthcare', label: 'Healthcare', icon: Building },
    { id: 'tech', label: 'Software / IT', icon: Database },
    { id: 'marketing', label: 'Agency / Marketing', icon: AlertTriangle },
    { id: 'other', label: 'Other', icon: Clock },
  ];

  const painPoints = [
    'Manual Data Entry',
    'CRM / Tool Syncing',
    'Complex Custom Reporting',
    'Customer Onboarding',
    'Invoice Processing',
    'Other Repetitive Tasks'
  ];

  const handleSelectIndustry = (industry: string) => {
    setFormData({ ...formData, industry });
    setTimeout(() => setStep(2), 300); // Small delay for UX satisfaction
  };

  const handleSelectPainPoint = (painPoint: string) => {
    setFormData({ ...formData, painPoint });
    setTimeout(() => setStep(3), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Submitted', formData);
    setStep(4);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-10 w-full shadow-2xl relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">Automation Health Check</h3>
        <p className="text-gray-400">Discover exactly where you're bleeding time and how to fix it.</p>
      </div>

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <p className="text-lg text-white mb-4 font-medium flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-sm">1</span>
            What industry are you in?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind.label)}
                  className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                    formData.industry === ind.label 
                      ? 'bg-blue-500/20 border-blue-500 text-white' 
                      : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800 hover:border-blue-500/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-medium text-center">{ind.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-300 mb-4 flex items-center gap-1 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" /> Back
          </button>
          <p className="text-lg text-white mb-4 font-medium flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-sm">2</span>
            What is your biggest manual bottleneck?
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {painPoints.map((point) => (
              <button
                key={point}
                onClick={() => handleSelectPainPoint(point)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  formData.painPoint === point 
                    ? 'bg-cyan-500/20 border-cyan-500 text-white' 
                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800 hover:border-cyan-500/50 hover:text-white'
                }`}
              >
                {point}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <button onClick={() => setStep(2)} className="text-sm text-gray-500 hover:text-gray-300 mb-4 flex items-center gap-1 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" /> Back
          </button>
          <p className="text-lg text-white mb-4 font-medium flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-sm">3</span>
            Where should we send your custom analysis?
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                required
                type="text" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                required
                type="email" 
                placeholder="Work Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="tel" 
                placeholder="Phone (Optional)" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
            <button 
              type="submit"
              className="w-full btn-glow bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              Get My Free Audit <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div className="animate-in zoom-in duration-500 text-center py-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">Request Received!</h4>
          <p className="text-gray-400">
            We've marked our calendars. You'll receive an email from us shortly with the next steps for your custom {formData.industry} automation audit.
          </p>
        </div>
      )}
    </div>
  );
}
