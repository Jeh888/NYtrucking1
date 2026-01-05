import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/utils';
import { services } from '@/data/services';
import { boroughs } from '@/data/locations';

export default function Footer() {
  const featuredServices = services.slice(0, 8);
  
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="bg-amber-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Injured in a Truck Accident?</h2>
          <p className="text-xl mb-6 opacity-90">Get the compensation you deserve. Free consultation.</p>
          <a 
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition"
          >
            📞 Call {SITE_CONFIG.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">About Us</h3>
            <p className="text-slate-400 mb-4">
              We are dedicated New York trucking accident attorneys fighting for victims across all five boroughs. 
              With decades of experience, we know how to take on trucking companies and their insurers.
            </p>
            <p className="text-slate-400">
              <strong className="text-white">No Fee Unless We Win</strong>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Our Services</h3>
            <ul className="space-y-2">
              {featuredServices.map(service => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-amber-500 transition"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-amber-500 hover:text-amber-400 transition font-semibold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Service Areas</h3>
            <ul className="space-y-2">
              {boroughs.map(borough => (
                <li key={borough}>
                  <Link 
                    href={`/locations#${borough.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-amber-500 transition"
                  >
                    {borough}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-amber-500 hover:text-amber-400 transition font-semibold">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Contact Us</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-amber-500 transition flex items-center gap-2">
                  <span>📞</span> {SITE_CONFIG.phoneFormatted}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-amber-500 transition flex items-center gap-2">
                  <span>✉️</span> {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span> {SITE_CONFIG.address}
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-slate-500">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-amber-500 transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-amber-500 transition">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-amber-500 transition">Disclaimer</Link>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Attorney Advertising. Prior results do not guarantee a similar outcome. 
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
