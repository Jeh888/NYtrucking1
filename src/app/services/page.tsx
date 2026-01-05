import { Metadata } from 'next';
import { services, servicesByCategory, categoryNames } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Truck Accident Legal Services',
  description: 'Comprehensive truck accident legal services in New York. From 18-wheeler accidents to wrongful death claims, we handle all types of trucking cases.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Truck Accident Legal Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            We handle all types of truck accident cases throughout New York. 
            Our specialized expertise ensures thorough investigation and maximum recovery.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                {categoryNames[category]}
              </h2>
              <p className="text-slate-600 mb-8">
                {category === 'accident-type' && 'We handle all types of truck and commercial vehicle accidents.'}
                {category === 'injury-type' && 'We fight for compensation for all truck accident injuries.'}
                {category === 'legal-process' && 'Our attorneys guide you through every step of the legal process.'}
                {category === 'violation' && 'We investigate trucking violations that cause accidents.'}
                {category === 'special-case' && 'We handle complex and unique trucking accident situations.'}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map(service => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Need Help With Your Truck Accident Case?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Contact us for a free consultation. We&apos;ll evaluate your case and explain your options.
          </p>
          <a 
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Call {SITE_CONFIG.phoneFormatted}
          </a>
        </div>
      </section>
    </>
  );
}
