import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/utils';
import { services, categoryNames, servicesByCategory } from '@/data/services';
import { locationsByBorough, boroughs } from '@/data/locations';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-600 text-sm font-semibold px-4 py-1 rounded-full mb-6">
                Trusted New York Truck Accident Attorneys
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Injured in a <span className="text-amber-500">Truck Accident</span> in New York?
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                We fight for victims of truck accidents across all five boroughs. 
                With decades of experience taking on trucking companies and their insurers, 
                we get results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition text-center"
                >
                  📞 Call {SITE_CONFIG.phoneFormatted}
                </a>
                <Link 
                  href="/services"
                  className="border-2 border-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition text-center"
                >
                  Our Services
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8 text-sm text-slate-400">
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
            
            <div className="bg-white rounded-xl p-8 text-slate-900 shadow-2xl">
              <h2 className="text-2xl font-bold mb-2">Free Case Review</h2>
              <p className="text-slate-600 mb-6">Get your case evaluated by an experienced attorney.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600">$500M+</div>
              <div className="text-slate-600 mt-1">Recovered for Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600">5,000+</div>
              <div className="text-slate-600 mt-1">Cases Handled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600">98%</div>
              <div className="text-slate-600 mt-1">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600">25+</div>
              <div className="text-slate-600 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Truck Accident Attorneys?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Truck accident cases are complex. You need attorneys who understand federal trucking 
              regulations and know how to take on powerful trucking companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Specialized Expertise</h3>
              <p className="text-slate-600">
                We focus exclusively on trucking accidents. We understand FMCSA regulations, 
                hours-of-service rules, and how to investigate trucking companies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Thorough Investigation</h3>
              <p className="text-slate-600">
                We preserve black box data, obtain driver logs, review maintenance records, 
                and work with accident reconstruction experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aggressive Representation</h3>
              <p className="text-slate-600">
                We take on the largest trucking companies and their insurers. 
                We&apos;re not afraid to go to trial to get you fair compensation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Fee Unless We Win</h3>
              <p className="text-slate-600">
                You pay nothing unless we recover compensation for you. 
                We advance all costs and expenses during your case.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600">
                We&apos;ve recovered over $500 million for truck accident victims. 
                Our track record speaks for itself.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Attention</h3>
              <p className="text-slate-600">
                You&apos;ll work directly with experienced attorneys, not paralegals. 
                We keep you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Truck Accident Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle all types of truck accident cases across New York.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/services"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              View All {services.length} Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Serving All Five Boroughs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We represent truck accident victims throughout New York City and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {boroughs.map(borough => (
              <div key={borough} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-3">{borough}</h3>
                <ul className="space-y-2">
                  {locationsByBorough[borough]?.slice(0, 5).map(location => (
                    <li key={location.slug}>
                      <Link 
                        href={`/locations/${location.slug}`}
                        className="text-slate-600 hover:text-amber-600 transition text-sm"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/locations"
                  className="inline-block mt-4 text-amber-600 font-semibold text-sm hover:underline"
                >
                  View All →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How We Handle Your Case
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our proven process ensures thorough investigation and maximum recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-slate-400">
                We review your case at no cost and explain your legal options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Investigation</h3>
              <p className="text-slate-400">
                We gather evidence, preserve black box data, and identify all liable parties.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Build Your Case</h3>
              <p className="text-slate-400">
                We document your damages, work with experts, and prepare for negotiation or trial.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Get Compensation</h3>
              <p className="text-slate-400">
                We fight for maximum recovery through settlement or trial verdict.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Don&apos;t Wait to Get Help
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Evidence can disappear quickly after a truck accident. 
            Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition"
            >
              📞 {SITE_CONFIG.phoneFormatted}
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-amber-600 font-bold py-4 px-8 rounded-lg text-xl transition"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
