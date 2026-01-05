import Link from 'next/link';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  locationSlug?: string;
}

export default function ServiceCard({ service, locationSlug }: ServiceCardProps) {
  const href = locationSlug 
    ? `/${service.slug}/${locationSlug}` 
    : `/services/${service.slug}`;

  return (
    <Link 
      href={href}
      className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition group"
    >
      <div className="text-3xl mb-3">{service.icon}</div>
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition mb-2">
        {service.name}
      </h3>
      <p className="text-slate-600 text-sm line-clamp-2">
        {service.description.substring(0, 120)}...
      </p>
      <span className="inline-block mt-4 text-amber-600 font-semibold text-sm group-hover:underline">
        Learn More →
      </span>
    </Link>
  );
}
