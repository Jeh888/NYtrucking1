import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locations, getLocationBySlug, locationsByBorough } from '@/data/locations';
import { services, servicesByCategory, categoryNames } from '@/data/services';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import { SITE_CONFIG } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map(location => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  
  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.name} Truck Accident Lawyer`,
    description: location.metaDescription,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const nearbyLocations = locationsByBorough[location.borough]
    ?.filter(l => l.slug !== location.slug)
    .slice(0, 6);

  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-amber-500 mb-4">
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>/</span>
            <span className="text-slate-400">{location.borough}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {location.name} Truck Accident Lawyer
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Experienced truck accident attorneys serving the {location.name} community. 
            We fight for fair compensation for accident victims in {location.borough}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Truck Accidents in {location.name}
                </h2>
                <p className="text-slate-700 mb-6">
                  {location.description}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Local Traffic Considerations
                </h3>
                <ul className="space-y-2 mb-6">
                  {location.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Why Choose Us for Your {location.name} Truck Accident Case
                </h3>
                <p className="text-slate-700 mb-4">
                  Our attorneys understand the unique traffic patterns and accident-prone areas in {location.name}. 
                  We have successfully represented many {location.borough} residents in truck accident claims.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Local knowledge of {location.name} roads and intersections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Experience with {location.borough} courts and procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Relationships with local medical providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Quick response for accident scene investigation</span>
                  </li>
                </ul>
              </div>

              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Our Services in {location.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {featuredServices.map(service => (
                    <ServiceCard 
                      key={service.slug} 
                      service={service} 
                      locationSlug={location.slug}
                    />
                  ))}
                </div>
                <div className="mt-6">
                  <Link 
                    href="/services"
                    className="text-amber-600 font-semibold hover:underline"
                  >
                    View All {services.length} Services →
                  </Link>
                </div>
              </div>

              {/* Nearby Locations */}
              {nearbyLocations && nearbyLocations.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Nearby {location.borough} Neighborhoods We Serve
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {nearbyLocations.map(nearby => (
                      <Link
                        key={nearby.slug}
                        href={`/locations/${nearby.slug}`}
                        className="block bg-slate-100 hover:bg-amber-50 rounded-lg p-4 transition"
                      >
                        <span className="font-semibold text-slate-900">{nearby.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Free Case Review
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Injured in a truck accident in {location.name}? Contact us for a free consultation.
                  </p>
                  <ContactForm location={location.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
