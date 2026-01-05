import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, categoryNames } from '@/data/services';
import { locations, locationsByBorough, boroughs } from '@/data/locations';
import ContactForm from '@/components/ContactForm';
import LocationCard from '@/components/LocationCard';
import { SITE_CONFIG } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} Lawyer in New York`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-amber-500 mb-4">
            <Link href="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-slate-400">{categoryNames[service.category]}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              {service.name} Lawyer in New York
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            {service.metaDescription}
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
                  Understanding {service.name} Cases
                </h2>
                <p className="text-slate-700 mb-6">
                  {service.description}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How We Help With {service.shortName} Cases
                </h3>
                <p className="text-slate-700 mb-4">
                  Our experienced truck accident attorneys understand the complexities of {service.name.toLowerCase()} cases. 
                  We investigate thoroughly, identify all liable parties, and fight for maximum compensation.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Immediate investigation to preserve critical evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Analysis of black box data and electronic logging devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Review of trucking company records and driver qualifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Expert witness coordination for accident reconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Aggressive negotiation with trucking company insurers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Trial-ready litigation when necessary</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Compensation for {service.shortName} Victims
                </h3>
                <p className="text-slate-700 mb-4">
                  Victims of {service.name.toLowerCase()} may be entitled to significant compensation, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Medical expenses (past and future)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Lost wages and loss of earning capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Pain and suffering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Emotional distress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Property damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Punitive damages in cases of egregious negligence</span>
                  </li>
                </ul>
              </div>

              {/* Locations Grid */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {service.shortName} Lawyers by Location
                </h3>
                {boroughs.map(borough => (
                  <div key={borough} className="mb-8">
                    <h4 className="font-semibold text-slate-700 mb-3">{borough}</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {locationsByBorough[borough]?.map(location => (
                        <LocationCard 
                          key={location.slug} 
                          location={location} 
                          serviceSlug={service.slug}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Free Case Review
                  </h3>
                  <ContactForm service={service.name} />
                </div>

                {relatedServices.length > 0 && (
                  <div className="bg-slate-100 rounded-xl p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Related Services</h3>
                    <ul className="space-y-3">
                      {relatedServices.map(related => (
                        <li key={related.slug}>
                          <Link 
                            href={`/services/${related.slug}`}
                            className="flex items-center gap-2 text-slate-700 hover:text-amber-600 transition"
                          >
                            <span>{related.icon}</span>
                            <span>{related.shortName}</span>
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
    </>
  );
}
