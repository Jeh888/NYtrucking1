'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-600 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span className="hidden sm:inline">Free Consultation • No Fee Unless We Win</span>
          <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold hover:underline">
            📞 Call Now: {SITE_CONFIG.phoneFormatted}
          </a>
        </div>
      </div>
      
      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-amber-500">NY</span> Trucking Accident Attorney
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/services" className="hover:text-amber-500 transition">Services</Link>
            <Link href="/locations" className="hover:text-amber-500 transition">Locations</Link>
            <Link href="/about" className="hover:text-amber-500 transition">About</Link>
            <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded font-semibold transition"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/services" className="hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/locations" className="hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>Locations</Link>
              <Link href="/about" className="hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/contact" className="hover:text-amber-500 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded font-semibold transition text-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
