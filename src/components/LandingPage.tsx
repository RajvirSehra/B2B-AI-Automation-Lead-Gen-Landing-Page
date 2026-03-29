import { useState } from 'react';
import { Building2, Database, Network, Settings, Shield, Zap } from 'lucide-react';
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
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
            Your team is spending hours
            <br />
            on work that shouldn't exist
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl">
            Most operational friction isn't inevitable. It's the result of processes that were never designed to scale.
            We build AI-powered automation systems that eliminate repetitive work and restore focus to what matters.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-gray-950 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Request an Automation Audit
          </button>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="px-6 py-24 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <div className="text-5xl font-bold text-white mb-2">8+</div>
              <div className="text-lg text-gray-400">Years building systems and working with data</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-lg text-gray-400">Automations running in production today</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">12+</div>
              <div className="text-lg text-gray-400">Industries served across B2B and B2C</div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-8">Trusted by teams at</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-lg">
                <Database className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-lg">
                <Network className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-lg">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-lg">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-lg">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-lg">
                <Zap className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Offer Section */}
      <section className="px-6 py-24" id="audit-form">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What you get with an automation audit
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              We'll review your current operations and identify specific areas where automation can reduce manual effort,
              improve accuracy, and free up your team's time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">What's included</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>30-minute discovery call to understand your workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Written analysis of 3-5 automation opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Estimated time savings and implementation timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>No obligation to move forward</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">What happens next</h3>
              <ol className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3 font-semibold">1.</span>
                  <span>We'll reach out within 24 hours to schedule your call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3 font-semibold">2.</span>
                  <span>We discuss your operations and pain points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3 font-semibold">3.</span>
                  <span>You receive a detailed audit report within 3 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3 font-semibold">4.</span>
                  <span>Decide if you want to proceed with implementation</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900 p-10 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-6">Request your free audit</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-400">
                Thank you! We'll be in touch within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-400">
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
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-gray-950 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Your Free Audit'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-900">
        <div className="max-w-5xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 AI Automation Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
