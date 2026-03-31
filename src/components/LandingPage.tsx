import { useState, useEffect } from 'react';
import { Building2, Database, Network, Settings, Shield, Zap, ArrowRight, Check } from 'lucide-react';
import ROICalculator from './ROICalculator';
import DiagnosticForm from './DiagnosticForm';
import SectorCloud from './SectorCloud';
import ImpactSnapshots from './ImpactSnapshots';
import FoundersNote from './FoundersNote';
import WorkflowSlider from './WorkflowSlider';
import SystemSchematic from './SystemSchematic';
import ExitIntentModal from './ExitIntentModal';
function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const painPoints = ['manual data entry', 'endless scheduling', 'complex reporting', 'repetitive tasks'];
  const [currentPainPoint, setCurrentPainPoint] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPainPoint((prev) => (prev + 1) % painPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 14500;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setHoursSaved(target);
        clearInterval(timer);
      } else {
        setHoursSaved(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <ExitIntentModal />
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl blob -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl blob-delay-1 -z-10" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl blob-delay-2 -z-10" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Automate<span className="text-blue-500">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#proof" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#audit-form" className="hover:text-white transition-colors">How it Works</a>
          </div>
          <button 
            onClick={scrollToForm}
            className={`btn-glow bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            Request Audit
          </button>
        </div>
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-75" style={{ width: `${scrollProgress}%` }} />
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
              Transform your operations with AI
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white min-h-[140px] md:min-h-[180px]">
            Your team is spending hours
            <br />
            <span className="text-gray-400">on </span>
            <span className="gradient-text transition-all duration-500 inline-block">
              {painPoints[currentPainPoint]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl">
            Most operational friction isn't inevitable. It's the result of processes that were never designed to scale.
            We build AI-powered automation systems that eliminate repetitive work and restore focus to what matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl">
            <button
              onClick={scrollToForm}
              className="btn-glow group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
            >
              Analyze My Workflows
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-16 flex items-center">
            <Shield className="w-4 h-4 mr-2 text-green-500" />
            100% Free • No credit card required • Zero obligation
          </p>

          {/* Stats preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            <div className="col-span-2 md:col-span-2 p-4 rounded-lg bg-gradient-to-br from-blue-900/40 to-blue-900/10 border border-blue-500/30 backdrop-blur w-full">
              <div className="text-3xl font-bold text-white mb-1">
                {hoursSaved.toLocaleString()}<span className="text-blue-400">+</span>
              </div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider font-semibold">Hours Saved This Month</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
              <div className="text-2xl font-bold text-cyan-400">200+</div>
              <div className="text-xs text-gray-400 mt-1">Automations live</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
              <div className="text-2xl font-bold text-blue-400">12+</div>
              <div className="text-xs text-gray-400 mt-1">Industries served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Cloud Section */}
      <SectorCloud />

      {/* Before & After Interactive Slider */}
      <WorkflowSlider />

      {/* Divider */}
      <div className="section-divider" />

      {/* Trust Signals Section */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven at scale, across industries
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've built and deployed hundreds of automations that solve real business problems
            </p>
          </div>

          <div className="mb-20">
            <ImpactSnapshots />
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-xl bg-gray-900/40 border border-gray-800 relative group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-8 right-8 text-6xl text-gray-800/50 font-serif leading-none group-hover:text-blue-500/20 transition-colors">"</div>
              <p className="text-lg text-gray-300 mb-6 relative z-10 italic">"The AI system they built cut our invoice processing time from 40 hours a week to just 2 hours. Our operations team is finally able to focus on scaling instead of drowning in data entry."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">SJ</div>
                <div>
                  <div className="text-white font-semibold">Sarah Jenkins</div>
                  <div className="text-sm text-blue-400">Director of Operations, TechFlow</div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-gray-900/40 border border-gray-800 relative group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-8 right-8 text-6xl text-gray-800/50 font-serif leading-none group-hover:text-cyan-500/20 transition-colors">"</div>
              <p className="text-lg text-gray-300 mb-6 relative z-10 italic">"We were heavily reliant on manual spreadsheets. Within two weeks, we had a fully automated pipeline running. Highly recommend to any B2B company looking to optimize."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">MR</div>
                <div>
                  <div className="text-white font-semibold">Marcus R.</div>
                  <div className="text-sm text-cyan-400">VP of Sales, OmniData</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-12">
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-8">Trusted by teams at</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: Database, label: 'Data Systems', tip: 'Automated ETL & Warehousing' },
                { icon: Network, label: 'Infrastructure', tip: 'Server Monitoring & Scaling' },
                { icon: Settings, label: 'Operations', tip: 'Workflow Automation' },
                { icon: Building2, label: 'Enterprise', tip: 'Cross-department Sync' },
                { icon: Shield, label: 'Security', tip: 'Compliance Automation' },
                { icon: Zap, label: 'Performance', tip: 'Speed Optimization' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-300 card-hover floating cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-800 shadow-xl z-10">
                    {item.tip}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-b border-r border-gray-800 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Systems Schematic Section */}
      <SystemSchematic />

      {/* ROI Calculator Section */}
      <section className="relative px-6 py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See exactly how much money and time you're leaving on the table.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Audit Offer Section */}
      <section className="relative px-6 py-24" id="audit-form">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What you get with an automation audit
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We'll review your current operations and identify specific areas where automation can reduce manual effort,
              improve accuracy, and free up your team's time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group glow-effect p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-gray-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <Check className="w-5 h-5 text-blue-400" />
                </span>
                What's included
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 font-bold">•</span>
                  <span>30-minute discovery call to understand your workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 font-bold">•</span>
                  <span>Written analysis of 3-5 automation opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 font-bold">•</span>
                  <span>Estimated time savings and implementation timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 font-bold">•</span>
                  <span>No obligation to move forward</span>
                </li>
              </ul>
            </div>

            <div className="group glow-effect p-8 rounded-xl bg-gradient-to-br from-cyan-900/20 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </span>
                What happens next
              </h3>
              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">1.</span>
                  <span>We'll reach out within 24 hours to schedule your call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">2.</span>
                  <span>We discuss your operations and pain points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">3.</span>
                  <span>You receive a detailed audit report within 3 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">4.</span>
                  <span>Decide if you want to proceed with implementation</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Diagnostic Form */}
          <div className="mt-16 w-full max-w-3xl mx-auto">
            <DiagnosticForm />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      <FoundersNote />

      {/* FAQ Section */}
      <section className="relative px-6 py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "Is my data secure?", a: "Absolutely. We are SOC 2 compliance-ready and never share your data. All automations use bank-grade encryption to ensure maximum security." },
              { q: "How long does implementation take?", a: "For most systems, we go from strategy call to live deployment within 2-4 weeks, depending on complexity." },
              { q: "Do I need technical skills?", a: "None at all. We build 'done-for-you' systems. We handle everything from data mapping to deployment and maintenance." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/30 transition-colors cursor-pointer group">
                <h3 className="text-lg font-semibold text-white mb-2 flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500 group-hover:rotate-180 transition-transform duration-300">↓</span>
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to reclaim your team's time?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's explore what's possible when you eliminate operational friction
          </p>
          <button
            onClick={scrollToForm}
            className="btn-glow group inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Analyze My Workflows
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 border-t border-gray-800 bg-gray-950">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Automate<span className="text-blue-500">AI</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Helping B2B companies scale effortlessly by automating manual workflows and eliminating operational friction.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#audit-form" className="hover:text-blue-400 transition-colors">How it Works</a></li>
              <li><a href="#proof" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#audit-form" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Automate AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-500">
            <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:text-white cursor-pointer transition-colors text-xs font-bold">in</div>
            <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:text-white cursor-pointer transition-colors text-xs font-bold">𝕏</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
