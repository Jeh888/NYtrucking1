import { Metadata } from 'next';
import { locationsByBorough, boroughs } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Service Areas - All NYC Neighborhoods',
  description: 'New York trucking accident attorneys serving all five boroughs. Manhattan, Brooklyn, Queens, Bronx, and Staten Island truck accident lawyers.',
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Serving All Five Boroughs
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Our truck accident attorneys represent victims throughout New York City. 
            No matter where your accident occurred, we can help.
          </p>
        </div>
      </section>

      {/* Locations by Borough */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {boroughs.map(borough => (
            <div 
              key={borough} 
              id={borough.toLowerCase().replace(' ', '-')}
              className="mb-16 last:mb-0 scroll-mt-24"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                {borough}
              </h2>
              <p className="text-slate-600 mb-6">
                Truck accident attorneys serving {borough} neighborhoods.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locationsByBorough[borough]?.map(location => (
                  <LocationCard key={location.slug} location={location} />
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
            Injured in a Truck Accident?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            We serve truck accident victims throughout New York. Contact us for a free consultation.
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
