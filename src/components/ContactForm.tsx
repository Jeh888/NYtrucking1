'use client';

import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/utils';

interface ContactFormProps {
  service?: string;
  location?: string;
}

export default function ContactForm({ service, location }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accidentDate: '',
    description: '',
    service: service || '',
    location: location || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your case information has been received. One of our attorneys will contact you within 24 hours.
        </p>
        <p className="text-green-600">
          For immediate assistance, call us at{' '}
          <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold underline">
            {SITE_CONFIG.phoneFormatted}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            placeholder="John Smith"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            placeholder="john@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="accidentDate" className="block text-sm font-medium text-slate-700 mb-1">
            Date of Accident
          </label>
          <input
            type="date"
            id="accidentDate"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
            value={formData.accidentDate}
            onChange={e => setFormData({ ...formData, accidentDate: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
          Tell Us About Your Case *
        </label>
        <textarea
          id="description"
          required
          rows={4}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none"
          placeholder="Please describe your accident and injuries..."
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
        <p className="flex items-start gap-2">
          <span className="text-green-600 mt-0.5">✓</span>
          Your information is confidential and protected by attorney-client privilege.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold py-4 px-6 rounded-lg transition text-lg"
      >
        {isSubmitting ? 'Submitting...' : 'Get Your Free Case Review'}
      </button>

      <p className="text-center text-sm text-slate-500">
        Or call us directly at{' '}
        <a href={`tel:${SITE_CONFIG.phone}`} className="text-amber-600 font-semibold hover:underline">
          {SITE_CONFIG.phoneFormatted}
        </a>
      </p>
    </form>
  );
}
