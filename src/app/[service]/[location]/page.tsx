import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { locations, getLocationBySlug, locationsByBorough } from '@/data/locations';
import ContactForm from '@/components/ContactForm';
import { SITE_CONFIG } from '@/lib/utils';

interface Props {
  params: Promise<{ service: string; location: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  
  for (const service of services) {
    for (const location of locations) {
      params.push({
        service: service.slug,
        location: location.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, location: locationSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(locationSlug);
  
  if (!service || !location) {
    return { title: 'Page Not Found' };
  }

  const title = `${service.name} Lawyer in ${location.name}, ${location.borough}`;
  const description = `Experienced ${service.name.toLowerCase()} attorney serving ${location.name}, ${location.borough}. Free consultation. No fee unless we win. Call ${SITE_CONFIG.phoneFormatted}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service: serviceSlug, location: locationSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(locationSlug);

  if (!service || !location) {
    notFound();
  }

  const nearbyLocations = locationsByBorough[location.borough]
    ?.filter(l => l.slug !== location.slug)
    .slice(0, 4);

  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-amber-500 mb-4">
            <Link href="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:underline">{service.shortName}</Link>
            <span>/</span>
            <Link href={`/locations/${location.slug}`} className="hover:underline">{location.name}</Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <span className="bg-amber-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {location.borough}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                {service.name} Lawyer in <span className="text-amber-500">{location.name}</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Experienced {service.name.toLowerCase()} attorneys serving the {location.name} community. 
                We fight for maximum compensation for truck accident victims in {location.borough}.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition text-center"
                >
                  📞 Call {SITE_CONFIG.phoneFormatted}
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Free Consultation
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> No Fee Unless We Win
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 24/7 Available
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 text-slate-900 shadow-2xl">
              <h2 className="text-xl font-bold mb-2">Free Case Review</h2>
              <p className="text-slate-600 mb-4 text-sm">
                Get your {location.name} truck accident case evaluated by an experienced attorney.
              </p>
              <ContactForm service={service.name} location={location.name} />
            </div>
          </div>
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
                  {service.name} in {location.name}
                </h2>
                <p className="text-slate-700 mb-6">
                  {service.description}
                </p>
                <p className="text-slate-700 mb-6">
                  {location.description}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Why {location.name} Residents Choose Us
                </h3>
                <p className="text-slate-700 mb-4">
                  Our attorneys have extensive experience handling {service.name.toLowerCase()} cases in {location.name} and throughout {location.borough}. 
                  We understand the local traffic patterns, know the courts, and have the resources to take on large trucking companies.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Deep knowledge of {location.name} roads and intersections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Experience with {location.borough} courts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Quick response for {location.name} accident investigations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Relationships with local medical providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Proven track record in {service.shortName.toLowerCase()} cases</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Traffic Hazards in {location.name}
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
                  Compensation for {service.shortName} Victims in {location.name}
                </h3>
                <p className="text-slate-700 mb-4">
                  If you&apos;ve been injured in a {service.name.toLowerCase()} in {location.name}, you may be entitled to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Medical expenses (current and future)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Lost wages and future earning capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Pain and suffering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Emotional distress and mental anguish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Property damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Punitive damages in cases of gross negligence</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
                  <h4 className="font-bold text-slate-900 mb-2">⚠️ Time is Critical</h4>
                  <p className="text-slate-700">
                    Evidence in truck accident cases can disappear quickly. Black box data may be overwritten, 
                    and trucking companies often begin their own investigations immediately. 
                    Contact us today to protect your rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact */}
                <div className="bg-slate-900 text-white rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Need Immediate Help?</h3>
                  <a 
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition text-center mb-4"
                  >
                    📞 {SITE_CONFIG.phoneFormatted}
                  </a>
                  <p className="text-sm text-slate-400 text-center">
                    Available 24/7 for emergencies
                  </p>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Related Services in {location.name}</h3>
                    <ul className="space-y-3">
                      {relatedServices.map(related => (
                        <li key={related.slug}>
                          <Link 
                            href={`/${related.slug}/${location.slug}`}
                            className="flex items-center gap-2 text-slate-700 hover:text-amber-600 transition"
                          >
                            <span>{related.icon}</span>
                            <span className="text-sm">{related.shortName}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Nearby Locations */}
                {nearbyLocations && nearbyLocations.length > 0 && (
                  <div className="bg-slate-100 rounded-xl p-6">
                    <h3 className="font-bold text-slate-900 mb-4">{service.shortName} in Nearby Areas</h3>
                    <ul className="space-y-2">
                      {nearbyLocations.map(nearby => (
                        <li key={nearby.slug}>
                          <Link 
                            href={`/${service.slug}/${nearby.slug}`}
                            className="text-slate-700 hover:text-amber-600 transition text-sm"
                          >
                            {nearby.name} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Injured in a {service.shortName} Accident in {location.name}?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Don&apos;t wait. Contact our experienced {location.borough} truck accident attorneys today.
          </p>
          <a 
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition"
          >
            📞 Call {SITE_CONFIG.phoneFormatted}
          </a>
        </div>
      </section>
    </>
  );
}
