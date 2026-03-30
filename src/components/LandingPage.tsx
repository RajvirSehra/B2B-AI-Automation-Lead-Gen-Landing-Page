import { useState, useEffect } from 'react';
import { Building2, Database, Network, Settings, Shield, Zap, ArrowRight, Check } from 'lucide-react';
import { submitAuditRequest, AuditRequest } from '../lib/supabase';

function LandingPage() {
  const [formData, setFormData] = useState<AuditRequest>({
    full_name: '',
    email: '',
    company_name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitAuditRequest(formData);
      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        phone: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl blob -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl blob-delay-1 -z-10" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl blob-delay-2 -z-10" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
              Transform your operations with AI
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
            Your team is spending hours
            <br />
            <span className="gradient-text">on work that shouldn't exist</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl">
            Most operational friction isn't inevitable. It's the result of processes that were never designed to scale.
            We build AI-powered automation systems that eliminate repetitive work and restore focus to what matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToForm}
              className="btn-glow group bg-white text-gray-950 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center sm:justify-start"
            >
              Request an Automation Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-900/50 transition-all duration-300 font-semibold">
              See how it works
            </button>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
              <div className="text-2xl font-bold text-blue-400">8+</div>
              <div className="text-xs text-gray-400 mt-1">Years experience</div>
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

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 card-hover">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">8+ Years</h3>
              <p className="text-gray-400">Building systems and working with data at scale</p>
            </div>

            <div className="group p-8 rounded-xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 card-hover">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">200+ Automations</h3>
              <p className="text-gray-400">Running reliably in production right now</p>
            </div>

            <div className="group p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 card-hover">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">12+ Industries</h3>
              <p className="text-gray-400">SaaS, finance, logistics, healthcare, and more</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-8">Trusted by teams at</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: Database, label: 'Data Systems' },
                { icon: Network, label: 'Infrastructure' },
                { icon: Settings, label: 'Operations' },
                { icon: Building2, label: 'Enterprise' },
                { icon: Shield, label: 'Security' },
                { icon: Zap, label: 'Performance' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-300 card-hover floating"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
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

          {/* Form */}
          <div className="relative glow-effect p-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-blue-500/20 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white mb-6">Request your free audit</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 flex items-center animate-in fade-in">
                <Check className="w-5 h-5 mr-3" />
                Thank you! We'll be in touch within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none input-focus transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none input-focus transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none input-focus transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none input-focus transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Tell us about your biggest operational challenges
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none input-focus transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-glow group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Your Free Audit
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

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
            Schedule Your Free Audit
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">&copy; 2024 AI Automation Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
